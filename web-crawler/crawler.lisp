(ql:quickload '(:dexador :plump :lquery :quri))

(defpackage :web-crawler
  (:use :cl)
  (:import-from :quri :uri :merge-uris :render-uri)
  (:export :start-crawler))

(in-package :web-crawler)

(defvar *visited-urls* (make-hash-table :test 'equal))
(defvar *url-queue* '())

(defun enqueue-url (url)
  "Add a URL to the queue if it hasn't been visited."
  (unless (gethash url *visited-urls*)
    (setf (gethash url *visited-urls*) t)
    (push url *url-queue*)))

(defun dequeue-url ()
  "Remove and return the next URL from the queue."
  (pop *url-queue*))

(defun fetch-page (url)
  "Fetch the content of a webpage as a string."
  (handler-case
      (dexador:get url)
    (error (e)
      (format t "Error fetching URL ~a: ~a~%" url e)
      nil)))

(defun extract-urls (html base-url)
  "Extract all valid URLs from HTML content and normalize them."
  (let ((parsed-html (lquery:$ (lquery:initialize html))))
    (coerce
     (lquery:$ parsed-html "a[href]"
               (attr "href")
               (map (lambda (href)
                      (quri:render-uri
                       (quri:merge-uris (quri:uri href) (quri:uri base-url))))))
     'list)))

(defun save-page-content (url content)
  "Save page content to a file."
  (let ((filename (format nil "page-~a.html" (get-universal-time))))
    (with-open-file (stream filename :direction :output :if-exists :supersede)
      (format stream "URL: ~a~%~%~a" url content))
    (format t "Saved content from ~a to ~a~%" url filename))) 

(defun crawl-page (url)
  "Crawl a single page, extracting and enqueueing links."
  (format t "Fetching: ~a~%" url)
  (let ((html (fetch-page url)))
    (when html
      (save-page-content url html)
      (dolist (link (extract-urls html url))
        (enqueue-url link)))))

(defun crawl (start-url &optional (limit 10))
  "Start crawling from the given URL up to the specified limit."
  (enqueue-url start-url)
  (loop for _ from 1 to limit
        while *url-queue*
        do (crawl-page (dequeue-url))))

(defun start-crawler ()
  (crawl "<url>"))
