---
created: 2023-01-24T03:41:37 (UTC +07:00)
tags: [Python,Django,framework,open-source]
source: https://www.djangoproject.com/download/
author: 
---

# Tải xuống Django | Gác cổng

> ## Excerpt
> The latest official version is 4.1.5

---
## Làm thế nào để có được Django

Django có sẵn mã nguồn mở theo [giấy phép BSD](https://github.com/django/django/blob/main/LICENSE). Chúng tôi khuyên bạn nên sử dụng phiên bản Python 3 mới nhất. Phiên bản cuối cùng để hỗ trợ Python 2.7 là Django 1.11 LTS. Xem [Câu hỏi thường gặp](https://docs.djangoproject.com/en/dev/faq/install/#what-python-version-can-i-use-with-django) về các phiên bản Python được hỗ trợ bởi mỗi phiên bản Django. Dưới đây là cách để có được nó:

## Tùy chọn 1: Tải phiên bản chính thức mới nhất

Phiên bản chính thức mới nhất là 4.1.5. Đọc [ghi chú phát hành 4.1.5](https://docs.djangoproject.com/en/4.1/releases/4.1.5/), sau đó cài đặt nó bằng [pip](https://pip.pypa.io/en/latest/):

```
pip install Django==4.1.5
```

## Tùy chọn 2: Tải alpha cho 4.2

Là một phần của [quá trình phát triển Django 4.2, Django](https://code.djangoproject.com/wiki/Version4.2Roadmap) 4.2a1 có sẵn. Bản phát hành này chỉ dành cho người dùng muốn dùng thử phiên bản mới và giúp xác định các lỗi còn lại trước khi 4.2 Phát hành. Vui lòng đọc [ghi chú phát hành 4.2](https://docs.djangoproject.com/en/4.2/releases/4.2/) trước khi sử dụng gói này.

Cài đặt alpha với [pip](https://pip.pypa.io/):

```
pip install --pre django
```

## Tùy chọn 3: Tải phiên bản phát triển mới nhất

Phiên bản Django mới nhất và tuyệt vời nhất là phiên bản có trong kho lưu trữ Git của chúng tôi (hệ thống kiểm soát sửa đổi của chúng tôi). Điều này chỉ dành cho những người dùng có kinh nghiệm muốn thử các thay đổi sắp tới và giúp xác định lỗi trước khi phát hành chính thức. Nhận nó bằng cách sử dụng lệnh shell này, yêu cầu [Git](https://git-scm.com/):

`git clone https://github.com/django/django.git`

Bạn cũng có thể tải xuống [một tarball gzipped](https://github.com/django/django/archive/main.tar.gz) của phiên bản phát triển. Kho lưu trữ này được cập nhật mỗi khi chúng tôi cam kết mã.

## Sau khi bạn nhận được nó

Xem hướng dẫn [cài đặt để được hướng dẫn](https://docs.djangoproject.com/en/stable/intro/install/) thêm. Đảm bảo rằng bạn đọc tài liệu tương ứng với phiên bản Django mà bạn vừa cài đặt.

Và hãy chắc chắn đăng ký [danh sách gửi thư](https://groups.google.com/group/django-users) của người dùng django, nơi những người dùng Django khác và chính các nhà phát triển Django đều đi chơi để giúp đỡ lẫn nhau.

## Phiên bản được hỗ trợ

**Các bản phát hành tính năng** (A.B, A.B+1, v.v.) sẽ diễn ra khoảng tám tháng một lần. Các bản phát hành này sẽ chứa các tính năng mới, cải tiến cho các tính năng hiện có, v.v.

**Các bản phát hành bản vá** (A.B.C, v.v.) sẽ được phát hành khi cần thiết, để sửa lỗi và / hoặc các vấn đề bảo mật. Các bản phát hành này sẽ tương thích 100% với Bản phát hành tính năng liên quan, trừ khi điều này là không thể để bảo mật lý do hoặc để ngăn ngừa mất dữ liệu. Vì vậy, câu trả lời cho "tôi có nên nâng cấp lên bản phát hành bản vá mới nhất?" sẽ luôn là "có".

Một số bản phát hành tính năng nhất định sẽ được chỉ định là **hỗ trợ dài hạn (LTS) phát hành**. Các bản phát hành này sẽ nhận được bảo mật và mất dữ liệu Các bản sửa lỗi được áp dụng trong một khoảng thời gian đảm bảo, thường là ba năm.

Xem [chính sách về các phiên bản được hỗ trợ](https://docs.djangoproject.com/en/dev/internals/release-process/#supported-versions) để biết hướng dẫn chi tiết về những bản sửa lỗi nào sẽ được hỗ trợ.

![Lộ trình phát hành Django](https://static.djangoproject.com/img/release-roadmap.4cf783b31fbe.png)

___

| Loạt phát hành | Phiên bản mới nhất | Kết thúc hỗ trợ chính<sup><a href="https://www.djangoproject.com/download/#ft1" _msthash="2062567" _msttexthash="4459">1</a></sup> | Kết thúc hỗ trợ mở rộng<sup><a href="https://www.djangoproject.com/download/#ft2" _msthash="2062775" _msttexthash="4550">2</a></sup> |
| --- | --- | --- | --- |
| 4.1 | 4.1.5 | Tháng Tư 2023 | Tháng MườI Hai 2023 |
| 4.0 | 4.0.8 | Tháng Tám 3, 2022 | Tháng Tư 2023 |
| 3.2 LTS · | 3.2.16 | Tháng Mười Hai 7, 2021 | Tháng Tư 2024 |

## Lộ trình tương lai

| Loạt phát hành | Ngày phát hành | Kết thúc hỗ trợ chính<sup><a href="https://www.djangoproject.com/download/#ft1" _msthash="2063555" _msttexthash="4459">1</a></sup> | Kết thúc hỗ trợ mở rộng<sup><a href="https://www.djangoproject.com/download/#ft2" _msthash="2063763" _msttexthash="4550">2</a></sup> |
| --- | --- | --- | --- |
| 5.2 LTS · | Tháng Tư 2025 | Tháng MườI Hai 2025 | Tháng Tư 2028 |
| 5.1 | Tháng Tám 2024 | Tháng Tư 2025 | Tháng MườI Hai 2025 |
| 5.0 | Tháng MườI Hai 2023 | Tháng Tám 2024 | Tháng Tư 2025 |
| 4.2 LTS · | Tháng Tư 2023 | Tháng MườI Hai 2023 | Tháng Tư 2026 |

## Các bản phát hành trước không được hỗ trợ

Các loạt bản phát hành này không còn nhận được các bản cập nhật bảo mật hoặc sửa lỗi.

| Loạt phát hành | Phiên bản mới nhất | Kết thúc hỗ trợ chính<sup><a href="https://www.djangoproject.com/download/#ft1" _msthash="2060578" _msttexthash="4459">1</a></sup> | Kết thúc hỗ trợ mở rộng<sup><a href="https://www.djangoproject.com/download/#ft2" _msthash="2060786" _msttexthash="4550">2</a></sup> |
| --- | --- | --- | --- |
| 3.1 | 3.1.14 | 6 Tháng Tư, 2021 | Tháng Mười Hai 7, 2021 |
| 3.0 | 3.0.14 | Tháng Tám 3, 2020 | 6 Tháng Tư, 2021 |
| 2.2 LTS · | 2.2.28 | Tháng Mười Hai 2, 2019 | 11 Tháng Tư, 2022 |
| 2.1 | 2.1.15 | 1 Tháng Tư, 2019 | Tháng Mười Hai 2, 2019 |
| 2.0 | 2.0.13 | Tháng Tám 1, 2018 | 1 Tháng Tư, 2019 |
| 1.11 LTS · <sup><a href="https://www.djangoproject.com/download/#ft3" _msthash="2061072" _msttexthash="4641">3</a></sup> | 1.11.29 | Tháng Mười Hai 2, 2017 | 1 Tháng Tư, 2020 |
| 1.10 | 1.10.8 | 4 Tháng Tư, 2017 | Tháng Mười Hai 2, 2017 |
| 1.9 | 1.9.13 | Tháng Tám 1, 2016 | 4 Tháng Tư, 2017 |
| 1.8 LTS · | 1.8.19 | Tháng Mười Hai 1, 2015 | 1 Tháng Tư, 2018 |
| 1.7 | 1.7.11 | 1 Tháng Tư, 2015 | Tháng Mười Hai 1, 2015 |
| 1.6 | 1.6.11 | Tháng Chín 2, 2014 | 1 Tháng Tư, 2015 |
| 1.5 | 1.5.12 | Tháng Mười Một 6, 2013 | Tháng Chín 2, 2014 |
| 1.4 LTS · | 1.4.22 | Tháng hai 26, 2013 | Tháng Mười 1, 2015 |
| 1.3 | 1.3.7 | Tháng ba 23, 2012 | Tháng hai 26, 2013 |

<sup id="ft1" _msthash="27079" _msttexthash="138868808">[1] Sửa lỗi bảo mật, lỗi mất dữ liệu, lỗi gặp sự cố, chức năng chính lỗi trong các tính năng mới được giới thiệu và hồi quy từ các phiên bản cũ hơn của Django.</sup>  
<sup id="ft2" _msthash="27196" _msttexthash="19089031">[2] Sửa lỗi bảo mật và lỗi mất dữ liệu.</sup>  
<sup id="ft3" _msthash="27313" _msttexthash="10456979">[3] Phiên bản cuối cùng hỗ trợ Python 2.7.</sup>

[Back to Top](https://www.djangoproject.com/download/#top)
