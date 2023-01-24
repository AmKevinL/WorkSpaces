---
created: 2023-01-24T08:06:04 (UTC +07:00)
tags: []
source: https://blogchiasekienthuc.com/thu-thuat-hay/cai-mariadb-tren-windows-10.html
author: Kiên Nguyễn
---

# Hướng dẫn cài đặt MariaDB trên hệ điều hành Windows 10

> ## Excerpt
> Chào các bạn, nếu là dân lập trình thì chắc các bạn cũng đã quen với nhiều loại hệ quản trị cơ sở dữ

---
Chào các bạn, nếu là dân lập trình thì chắc các bạn cũng đã quen với nhiều loại hệ quản trị cơ sở dữ liệu như: MySQL, SQL server… rồi đúng không?

MariaDB cũng là một hệ quản trị cơ sở dữ liệu nhưng là một nhánh của MySQL, vậy nên có một vài điểm khác nhau giữa MariaDB và MySQL.

MariaDB kết thừa hầu như toàn bộ các tính chất của MySQL, nhưng nó được tối ưu về cơ chế lưu trữ và MariaDB thì hoàn toàn miễn phí – Free 100%.

Ở trong bài viết này mình sẽ hướng dẫn các bạn **cách cài đặt MariaDB trên hệ điều hành Window 10** một cách chi tiết nhất. Ok, giờ chúng ta bắt đầu thôi nào !

### **Cách cài đặt MariaDB trên hệ điều hành Windows 10**

**\+ Bước 1:** Đầu tiên các tải file cài đặt theo link sau: [https://mariadb.com/downloads/](https://mariadb.com/downloads/). Các bạn lưu ý chọn đúng hệ điều hành và phiên bản tương ứng ở mục **<sup>(2)</sup>** nhé.

[![cai-mariadb-tren-he-dieu-hanh-windows-10 (1)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-1.png)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-1.png)

![cai-mariadb-tren-he-dieu-hanh-windows-10 (2)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-2.png)

**\+ Bước 2:** Sau khi tải về xong thì các bạn đúp chuột vào file để bắt đầu cài đặt => Nhấn `Next` để tiếp tục.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (3)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-3.png)

Tiếp theo các bạn tích vào `I accept the terms in the License Agreement` => sau đó bấm vào `Next` để đi tiếp.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (4)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-4.png)

**\+ Bước 3:** Ở bước này có rất nhiều lưu ý, nếu bạn nào để nguyên mặc định thì có thể chọn `Next` và tiếp tục luôn. Còn bạn nào muốn thay đổi thì:

-   <sup><strong>(1)</strong> </sup> Những thành phần sẽ được cài đặt với MariaDB
-   <sup><strong>(2)</strong> </sup> Dung lượng ổ cứng bị chiếm sau khi cài đặt (phụ thuộc vào những gì các bạn chọn ở bước 1)
-   <sup><strong>(3)</strong> </sup> Vị trí mặc định cài đặt MariaDB
-   <sup><strong>(4)</strong> </sup> Các bạn có thể bấm vào Browse để thay đổi vị trí cài đặt MariaDB

![cai-mariadb-tren-he-dieu-hanh-windows-10 (5)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-5.png)

**\+ Bước 4:** Ở bước tiếp theo này, các bạn sẽ cấu hình cho MariaDB, chủ yếu vẫn là chọn mật khẩu. Các bạn có thể để mật khẩu mạnh hay yếu tùy vào mong muốn cũng như mức độ tiện lợi.

\=> Sau đó bấm `Next` để tiếp tục.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (6)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-6.png)

**\+ Bước 5:** Đến bước này, chúng ta vẫn tiếp tục cấu hình các thành phần như: Server Name, TCP port, Buffer pool size và Size.

Ở đây mình chỉ lưu ý cái `TCP port` thôi vì nếu bạn nào cài `MySQL` chẳng hạn thì `TCP port` của `MySQL` là `3306`.

Nếu bạn không đổi thành `3307` (hoặc là một cổng khác, miễn là chưa dùng) như hình bên dưới thì bạn sẽ không chạy được MariaDB, vì mặc định MariaDB cũng chạy cổng `3306`.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (7)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-7.png)

**\+ Bước 6:** Sau khi cấu hình xong các bạn bấm `Next` để đến bước tiếp theo là bước cài đặt, quá trình cài đặt có thể mất 2-4 phút tùy cấu hình máy và tốc độ Internet nhà bạn.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (8)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-8.png)

**\+ Bước 7:** Sau khi cầu hình thành công thì xác nhận bằng cách bấm nút `Finish` để hoàn tất cài đặt.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (9)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-9.png)

**\+ Bước 8:** Ở bước này cũng có khá nhiều thao tác, bạn quan tâm các bước 1, 2, 3 dùng để tạo một kết nối đến ứng dụng. Lưu ý là các thông tin về `username` và `Mật khẩu`, `Port` sau đó bấm `Open`.

![cai-mariadb-tren-he-dieu-hanh-windows-10 (10)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-10.png)

Trong một số trường hợp các bạn chưa lưu được các thay đổi trong kết nối (connection) vừa tạo thì bấm `Yes` để xác nhận lưu và tiếp tục như hình bên dưới.

\=> Sau đó bấm `Open` để chạy `HeidiSQL` (cái này giống với MySQL Workbench trong MySQL này).

![cai-mariadb-tren-he-dieu-hanh-windows-10 (11)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-11.png)

Và đây chính giao diện của HeidiSQL.

[![cai-mariadb-tren-he-dieu-hanh-windows-10 (12)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-12.png)](https://blogchiasekienthuc.com/wp-content/uploads/2021/03/cai-mariadb-tren-he-dieu-hanh-windows-10-12.png)

### **Lời Kết**

Đọc thêm:

-   [Hướng dẫn cách tích hợp Spring Tools vào Eclipse, đơn giản !](https://blogchiasekienthuc.com/thu-thuat-hay/cach-tich-hop-spring-tools-vao-eclipse.html)
-   [Hướng dẫn cài đặt IntelliJ phiên bản Ultimate trên Windows 10](https://blogchiasekienthuc.com/windows-server/cai-dat-intellij-ultimate-tren-windows.html)

Vậy là trong bài viết này mình đã hướng dẫn với các bạn **cài đặt MariaDB trên Windows 10** rồi nha – một hệ quản trị cơ sở dữ liệu khá là mạnh và tiện lợi hiện nay.

MariaDB là một giải pháp miễn phí và nó đang được rất nhiều doanh nghiệp, công ty tin tưởng sử dụng. Okay, hẹn gặp lại các bạn trong các bài viết theo nha !

**CTV: Nguyễn Đức Cảnh** – Blogchiasekienthuc.com

Bài viết đạt: 4/5 sao - (Có 4 lượt đánh giá)

**Note:** Bài viết này hữu ích với bạn chứ? Đừng quên đánh giá bài viết, like và chia sẻ cho bạn bè và người thân của bạn nhé !
