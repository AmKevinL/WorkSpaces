---
created: 2023-01-24T08:38:38 (UTC +07:00)
tags: []
source: https://mariadb.com/kb/vi/basic-sql-statements/
author: 
---

# Câu lệnh SQL cơ bản - MariaDB Knowledge Base

> ## Excerpt
> Trang này liệt kê các câu lệnh SQL quan trọng nhất và chứa liên kết đến các trang tài liệu. Nếu bạn cần một hướng dẫn cơ bản làm thế nào để sử dụng máy chủ cơ sở dữ liệu Maria...

---
Trang này liệt kê các câu lệnh SQL quan trọng nhất và chứa liên kết đến các trang tài liệu. Nếu bạn cần một hướng dẫn cơ bản làm thế nào để sử dụng máy chủ cơ sở dữ liệu MariaDB và làm thế nào để thực thi các lệnh đơn giản, xem [Một cuốn sách vở lòng MariaDB](https://mariadb.com/kb/en/a-mariadb-primer/).

## Định nghĩa cách dữ liệu của bạn được lưu trữ

-   [CREATE DATABASE](https://mariadb.com/kb/en/create-database/) được dùng để tạo cơ sở dữ liệu mới, trống.
-   [DROP DATABASE](https://mariadb.com/kb/en/drop-database/) được dùng để hủy hoàn toàn một cơ sở dữ liệu sẵn có.
-   [USE](https://mariadb.com/kb/en/use/) được dùng để lựa chọn một cơ sở dữ liệu làm mặc định.
-   [CREATE TABLE](https://mariadb.com/kb/en/create-table/) được dùng để tạo một bảng mới, nơi mà dữ liệu của bạn thực sự được lưu trữ.
-   [ALTER TABLE](https://mariadb.com/kb/en/alter-table/) được dùng để sửa một định nghĩa bảng sẵn có.
-   [DROP TABLE](https://mariadb.com/kb/en/drop-table/) được sử dụng để hủy hoàn toàn một bảng sẵn có.
-   [DESCRIBE](https://mariadb.com/kb/en/describe/) hiển thị cấu trúc của một bảng.

## Thao tác với Dữ liệu của bạn

-   [SELECT](https://mariadb.com/kb/en/select/) được dùng khi bạn muốn đọc (hoặc lựa chọn) dữ liệu của bạn.
-   [INSERT](https://mariadb.com/kb/en/insert/) được dùng khi bạn muốn thêm (hoặc chèn) dữ liệu mới.
-   [UPDATE](https://mariadb.com/kb/en/update/) được sử dụng khi bạn muốn thay đổi (hoặc cập nhật) dữ liệu sẵn có.
-   [DELETE](https://mariadb.com/kb/en/delete/) được sử dụng khi bạn muốn loại bỏ (hoặc xóa) dữ liệu sẵn có.
-   [REPLACE](https://mariadb.com/kb/en/replace/) được sử dụng khi bạn muốn thêm hoặc thay đổi (hoặc đổi chỗ) dữ liệu mới hoặc dữ liệu đã có.
-   [TRUNCATE](https://mariadb.com/kb/en/truncate-table/) được sử dụng khi bạn muốn làm trống (hoặc xóa) tất cả dữ liệu từ mẫu.

## Giao dịch

-   [START TRANSACTION](https://mariadb.com/kb/en/start-transaction/) được dùng để bắt đầu một giao dịch.
-   [COMMIT](https://mariadb.com/kb/en/commit/) được sử dụng để áp dụng các thay đổi và kết thúc giao dịch.
-   [ROLLBACK](https://mariadb.com/kb/en/rollback/) được sử dụng để loại bỏ những thay đổi và kết thúc giao dịch.

### Một Ví dụ Đơn giản

```
CREATE DATABASE mydb;
USE mydb;
CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(20) );
INSERT INTO mytable VALUES ( 1, 'Will' );
INSERT INTO mytable VALUES ( 2, 'Marry' );
INSERT INTO mytable VALUES ( 3, 'Dean' );
SELECT id, name FROM mytable WHERE id = 1;
UPDATE mytable SET name = 'Willy' WHERE id = 1;
SELECT id, name FROM mytable;
DELETE FROM mytable WHERE id = 1;
SELECT id, name FROM mytable;
DROP DATABASE mydb;
SELECT count(1) from mytable; gives the number of records in the table

```

-   [↑ Các lệnh SQL ↑](https://mariadb.com/kb/vi/cac-lenh-sql/)
-   [TẠO CƠ SỞ DỮ LIỆU →](https://mariadb.com/kb/vi/create-database/)

## Bình luận

Content reproduced on this site is the property of its respective owners, and this content is not reviewed in advance by MariaDB. The views, information and opinions expressed by this content do not necessarily represent those of MariaDB or any other party.
