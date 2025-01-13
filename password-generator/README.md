# Password Generator

I developed this simple program out of a need for better password management. After experiencing the risk of reusing the same password across multiple websites, I decided to build my own generator — one that I could fully control, integrate with my own database (preferably MySQL), and trust to keep my credentials safe.

## To-do

Store passwords with along with their associated site and log in information in a MySQL database.

### Database Design

| Field Name | Data Type           | Description                               |
|------------|---------------------|-------------------------------------------|
| id         | INT(Auto increment) | Unique ID for each entry (Primary Key)    |
| site_name  | VARCHAR(255)        | Website or service name                   |
| login      | VARCHAR(255)        | Associated email, username, or login info |
| password   | VARCHAR(255)        | The password for the login                |
