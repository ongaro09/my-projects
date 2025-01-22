# Common Lisp Web Crawler

## Overview

This project is a basic web crawler implemented in **Common Lisp**. The purpose of this project is purely educational, and I did it just for fun, mainly becuase of the many positive reviews I've heard about this
powerful language.

## Features

- Fetches web pages using the **Dexador** library.
- Parses HTML content with **Plump** and **LQuery**.
- Extracts and normalizes hyperlinks using **Quri**.
- Saves web page content locally in a structured format.
- Crawls up to a specified limit to avoid indefinite execution.

## Dependencies

The following libraries are required:

- **[Dexador](https://github.com/fukamachi/dexador)**: An HTTP client for Common Lisp.
- **[Plump](https://github.com/Shinmera/plump)**: A library for parsing and handling HTML.
- **[LQuery](https://github.com/Shinmera/lquery)**: A DOM manipulation library.
- **[Quri](https://github.com/fukamachi/quri)**: A URI handling library.

## To-do
- Robots.txt Handling. 
- Parallel Processing.
- Basic URL Filtering.
- Content Analysis (The crawler only saves raw HTML content).


You can install these libraries via Quicklisp:

```lisp
(ql:quickload '(:dexador :plump :lquery :quri))

