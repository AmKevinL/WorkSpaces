---
created: 2023-01-22T02:30:58 (UTC +07:00)
tags: []
source: https://tanhongit.com/huong-dan-cai-bo-go-tieng-viet-ibus-unikey-tren-ubuntu/
author: Tan Nguyen
---

# Hướng dẫn cài bộ gõ tiếng Việt ibus-unikey trên Ubuntu 20.04 LTS - TanHongIT

> ## Excerpt
> Để gõ được tiếng việt trên Ubuntu thì bạn cần phải cài thêm bộ gõ tiếng Việt là ibus-unikey vào chiếc máy tính của mình. Cài đặt trên bản 20.04 LTS hoặc...

---
Để có thể **gõ được tiếng việt trên Ubuntu** thì bạn cần phải cài thêm bộ gõ tiếng Việt là **ibus-unikey** vào chiếc máy tính của mình. Bởi lẽ Ubuntu khi vừa mới cài đặt xong sẽ không hỗ trợ sẵn bộ gõ Tiếng Việt cho bạn đâu. Tương tự như Windows ta cần phải cài **Unikey** hoặc **EVKey** vậy á! Trong bài viết này mình sẽ hướng dẫn các bạn **cài bộ gõ tiếng Việt (ibus-unikey) trên Ubuntu 20.04 LTS** chỉ với vài thao tác đơn giản.

[![cai bo go tieng viet ibus-unikey ubuntu](https://tanhongit.com/storage/2020/05/cai-bo-go-tieng-viet-ibus-unikey-ubuntu.jpg.webp)](https://tanhongit.com/storage/2020/05/cai-bo-go-tieng-viet-ibus-unikey-ubuntu.jpg)

Hướng dẫn cài bộ gõ tiếng Việt ibus-unikey trên Ubuntu

Hiện tại phương pháp này vẫn có thể áp dụng cho các phiên bản Ubuntu cũ hơn như Ubuntu 19.04, Ubuntu 19.10, Ubuntu 18.04, Ubuntu 16.04,…và các phiên bản khác.

Để tránh xảy ra lỗi các bạn hãy thực hiện theo từng bước hướng dẫn nhé!

## **Hướng dẫn cài đặt bộ gõ tiếng việt ibus-unikey cho Ubuntu**

### **Bắt đầu cài đặt ibus-unikey**

Mở nhanh **Terminal Command** bằng tổ hợp phím **Ctrl + Alt + T**, thực hiện dòng lệnh command sau để cài đặt ibus-unikey:

```
sudo apt-get install ibus-unikey
```

[![cài đặt ibus-unikey](https://imgur.com/7d3nkE3.png)](https://imgur.com/7d3nkE3.png)

Trường hợp phiên bản Ubuntu của bạn chưa có sẵn gói ibus-unikey thì hãy chạy 2 dòng lệnh command sau để thêm vào:

```
sudo add-apt-repository ppa:ubuntu-vn/ppa
sudo apt-get update
```

### Khởi động lại phần mềm ibus

Để khởi động lại ibus, các bạn dùng command sau

```
ibus restart
```

### Thiết lập gõ tiếng việt cho ibus trên Ubuntu

**Bước 1:** Tìm kiếm chức năng quản lý **\[Settings\]**

**Bước 2:** Ở cửa sổ **\[Settings\]** -> **\[Region  & Language\]** -> **\[Input Sources\]** -> Bấm **\[ + \]** để thêm 1 input source.

[![thiet lap go tieng viet ibus](https://tanhongit.com/storage/2020/05/thiet-lap-go-tieng-viet-ibus.jpg.webp)](https://tanhongit.com/storage/2020/05/thiet-lap-go-tieng-viet-ibus.jpg)

**Bước 3:** Ở cửa sổ **\[ Add an Input Source \]** -> Tìm kiếm và chọn ngôn ngữ là “**Vietnamese**” -> Chọn tiếp là “**Vietnamese (Unikey)**” -> Cuối cùng bấm “**Add**”

[![](https://imgur.com/oCfSeDX.png)](https://imgur.com/oCfSeDX.png)[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDMiIGhlaWdodD0iNDkxIiB2aWV3Qm94PSIwIDAgNDQzIDQ5MSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4=)](https://imgur.com/xtPeEX3.png)

Bước 4: Ubuntu sẽ tự động có thêm ngôn ngữ tiếng việt, Nếu thường hợp không thấy bạn hãy restart lại Ubuntu là sẽ tự xác nhận Ibus-Unikey đã có 2 ngôn ngữ là tiếng Anh và tiếng Việt ngay.

[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTkiIGhlaWdodD0iMzI1IiB2aWV3Qm94PSIwIDAgMjk5IDMyNSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4=)](https://imgur.com/P8zWggB.png)

Bạn có thể chuyển đổi qua lại giữa 2 ngôn ngữ bằng phìm tắt là “**Windows + Space**”

## Thiết lập gõ tiếng việt cho ibus trên Ubuntu 16.04 và 17.10 (Version cũ)

**Bước 1:** Sau khi đã chạy lệnh cài đặt ibus ở phần trên xong, bạn hãy mở Terminal lên và chạy command sau để thiết lập gõ tiếng Việt cho Ibus.

```
ibus-setup
```

**Bước 2:** Cửa sổ \[**IBus Preferences**\] hiện ra.

Ở tab \[ **General** \] -> Tích vào ô “**Show icon on system tray**”

[![thiet lap go tieng viet ibus ubuntu 16.04](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MzIiIGhlaWdodD0iNDg2IiB2aWV3Qm94PSIwIDAgNjMyIDQ4NiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4=)](https://tanhongit.com/storage/2020/05/thiet-lap-go-tieng-viet-ibus-ubuntu-16.04..jpg)

**Bước 3:** Chuyển sang tab \[ **Input Method** \] -> bấm vào “**Add**” để thêm ngôn ngữ tiếng Việt.

[![thiet lap go tieng viet ibus ubuntu 17.10](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MzciIGhlaWdodD0iNDg2IiB2aWV3Qm94PSIwIDAgNjM3IDQ4NiI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2NmZDRkYjtmaWxsLW9wYWNpdHk6IDAuMTsiLz48L3N2Zz4=)](https://tanhongit.com/storage/2020/05/thiet-lap-go-tieng-viet-ibus-ubuntu-17.10.jpg)

**Bước 4:** Tìm kiếm ngôn ngữ “**Vietnamese**” -> Chọn “**Unikey**” -> Bấm “Add” để thêm ngôn ngữ tiếng Việt.

## Uninstall ibus-unikey

Để gỡ bỏ ibus-unikey khỏi Ubuntu ta mở nhanh **Terminal Command** bằng tổ hợp phím **Ctrl + Alt + T**, thực hiện dòng lệnh command sau:

```
sudo apt-get remove ibus-unikey
```

Sau đó bạn nhập mật khẩu xác thực để hoàn tất quá trình gỡ bỏ nhé!

> Nếu các bạn cảm thấy **Website TanHongIT.Com** thật sự hữu ích mình mong các bạn có thể chia sẻ những bài viết đến cho cộng đồng cùng thao khảo nhé. Cảm ơn các bạn !!!

> **Các bạn có bất kì thắc mắc cần được hỗ trợ hay yêu cầu các phần mềm, thủ thuật, khoá học,… thì cứ để lại comment bên dưới bài viết hoặc liên hệ qua [fanpage của TanHongIT](https://www.facebook.com/111522570436878) để được hỗ trợ nhé! Mình sẽ cố gắng chia sẻ cho các bạn mọi thứ cần thiết nhất!**

### **Xem thêm**

-   **[Hướng dẫn sửa lỗi không tắt hoặc khởi động lại được Ubuntu – Ubuntu can’t shutdown restart](https://tanhongit.com/huong-dan-sua-loi-khong-tat-hoac-khoi-dong-lai-duoc-ubuntu-ubuntu-cant-shutdown-restart/)**
-   **[Thủ thuật chụp ảnh màn hình trên Ubuntu siêu dễ và tiện lợi](https://tanhongit.com/thu-thuat-chup-anh-man-hinh-tren-ubuntu-sieu-de-va-tien-loi)**
-   **[Hướng dẫn cài đặt hoặc gỡ Google Chrome cho Ubuntu Linux 18.04, 19.10, 20.04 Mới nhất](https://tanhongit.com/huong-dan-cai-dat-hoac-go-google-chrome-cho-ubuntu-linux-moi-nhat/)**
-   **[9 Github repo phổ biến và hữu ích dành cho web developer](https://tanhongit.com/9-github-repo-pho-bien-va-huu-ich-danh-cho-web-developer/)**
-   **[Lộ trình học PHP từ cơ bản đến nâng cao chuyên nghiệp](https://tanhongit.com/lo-trinh-hoc-php-tu-co-ban-den-nang-cao-chuyen-nghiep/)**
-   **[Hướng dẫn viết một Extension cơ bản trên Chrome](https://tanhongit.com/viet-mot-extension-co-ban-tren-chrome/)**
-   **[Bài 1: XML là gì? Tổng quan về XML](https://tanhongit.com/bai-1-xml-la-gi-tong-quan-ve-xml/)**
-   **[Top 5 giải pháp làm việc hiệu quả tại nhà](https://tanhongit.com/top-5-giai-phap-lam-viec-hieu-qua-tai-nha/)**
-   **[Vai trò Apache và PHP Hoạt Động Cùng Nhau Như Thế Nào](https://tanhongit.com/vai-tro-apache-va-php-hoat-dong-cung-nhau-nhu-the-nao/)**
-   **[Những Plugin Sublime Text Cần Thiết Cho Web Developers](https://tanhongit.com/nhung-plugin-sublime-text-can-thiet-cho-web-developers/)**
-   **[Laravel Error: No application encryption key has been specified](https://tanhongit.com/laravel-error-no-application-encryption-key-has-been-specified/)**

Tham khảo:

-   [https://howtoinstall.co/en/ubuntu/trusty/ibus-unikey](https://howtoinstall.co/en/ubuntu/trusty/ibus-unikey)
-   [https://vinasupport.com/huong-dan-cai-bo-go-tieng-viet-ibus-unikey-tren-ubuntu/](https://vinasupport.com/huong-dan-cai-bo-go-tieng-viet-ibus-unikey-tren-ubuntu/)

**CHÚC CÁC BẠN THÀNH CÔNG VÀ VUI VẺ**
