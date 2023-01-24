---
created: 2023-01-24T03:42:11 (UTC +07:00)
tags: [Python,Django,framework,open-source]
source: https://docs.djangoproject.com/en/4.1/intro/install/
author: 
---

# Hướng dẫn cài đặt nhanh | Tài liệu Django | Gác cổng

> ## Excerpt
> The web framework for perfectionists with deadlines.

---
## Quick install guide[¶](https://docs.djangoproject.com/en/4.1/intro/install/#quick-install-guide "Permalink to this headline")

Before you can use Django, you’ll need to get it installed. We have a [complete installation guide](https://docs.djangoproject.com/en/4.1/topics/install/) that covers all the possibilities; this guide will guide you to a minimal installation that’ll work while you walk through the introduction.

## Install Python[¶](https://docs.djangoproject.com/en/4.1/intro/install/#install-python "Permalink to this headline")

Being a Python web framework, Django requires Python. See [What Python version can I use with Django?](https://docs.djangoproject.com/en/4.1/faq/install/#faq-python-version-support) for details. Python includes a lightweight database called [SQLite](https://www.sqlite.org/) so you won’t need to set up a database just yet.

Get the latest version of Python at [https://www.python.org/downloads/](https://www.python.org/downloads/) or with your operating system’s package manager.

You can verify that Python is installed by typing from your shell; you should see something like:`python`

```
Python 3.x.y
[GCC 4.x] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>

```

## Thiết lập cơ sở dữ liệu[¶](https://docs.djangoproject.com/en/4.1/intro/install/#set-up-a-database "Permalink to this headline")

Bước này chỉ cần thiết nếu bạn muốn làm việc với một công cụ cơ sở dữ liệu "lớn" như PostgreSQL, MariaDB, MySQL hoặc Oracle. Để cài đặt một cơ sở dữ liệu như vậy, hãy tham khảo ý kiến thông [tin cài đặt cơ sở dữ liệu](https://docs.djangoproject.com/en/4.1/topics/install/#database-installation).

## Cài đặt Django[¶](https://docs.djangoproject.com/en/4.1/intro/install/#install-django "Permalink to this headline")

Bạn có ba tùy chọn để cài đặt Django:

-   [Cài đặt bản phát hành chính thức](https://docs.djangoproject.com/en/4.1/topics/install/#installing-official-release). Này là cách tiếp cận tốt nhất cho hầu hết người dùng.
-   Cài đặt phiên bản Django [do hệ điều hành của bạn cung cấp phân phối](https://docs.djangoproject.com/en/4.1/topics/install/#installing-distribution-package).
-   [Cài đặt phiên bản phát triển mới nhất](https://docs.djangoproject.com/en/4.1/topics/install/#installing-development-version). Tùy chọn này dành cho những người đam mê muốn các tính năng mới nhất và tuyệt vời nhất và không ngại chạy mã hoàn toàn mới. Bạn có thể gặp phải lỗi mới trong phiên bản phát triển, nhưng báo cáo chúng giúp phát triển Django. Ngoài ra, các bản phát hành của các gói của bên thứ ba là ít có khả năng tương thích với phiên bản phát triển hơn so với bản phát hành ổn định mới nhất.

Luôn tham khảo tài liệu tương ứng với phiên bản Django bạn đang sử dụng!

Nếu bạn thực hiện một trong hai bước đầu tiên, hãy chú ý đến các phần của tài liệu được đánh dấu **mới trong phiên bản phát triển**. Cụm từ đó gắn cờ các tính năng chỉ có sẵn trong các phiên bản phát triển của Django và chúng có thể sẽ không hoạt động với bản phát hành chính thức.

## Xác minh[¶](https://docs.djangoproject.com/en/4.1/intro/install/#verifying "Permalink to this headline")

Để xác minh rằng Python có thể nhìn thấy Django, hãy nhập từ shell của bạn. Sau đó, tại lời nhắc Python, hãy thử nhập Django:`python`

```
>>> import django
>>> print(django.get_version())
4.1

```

Bạn có thể đã cài đặt một phiên bản Django khác.
