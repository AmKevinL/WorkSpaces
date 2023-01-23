# Introduction

Plugin **không đổi tên tệp**,
nó chỉ sử dụng giá trị cụ thể từ khối meta của tệp đánh dấu dưới dạng tên tệp được hiển thị trong trình khám phá hoặc biểu đồ.

> Giá trị từ khóa cụ thể **phải là** một chuỗi hoặc một số hoặc một mảng (danh sách)
# Installation (one of)

-   Tải xuống từ Obsidian thông qua `Plugin cộng đồng`
- Sử dụng [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin
- Tải xuống `obsidian-front-matter-title-#LAST_RELEASE#.zip`
    từ [bản phát hành cuối](https://github.com/Snezhig/obsidian-front-matter-title/releases/latest/) và giải nén nó vào
    vault theo đường dẫn: `.obsidian/plugins`

# Template

## Values

Plugin có thể sử dụng các giá trị trích xuất từ ​​khối meta, thông tin tệp hoặc tiêu đề.

Ngoài ra, bạn có thể đặt mẫu là `path.to.value` và plugin sẽ cố lấy giá trị từ trường `path` , sau đó từ trường `to` 
và cuối cùng là từ trường `value`. [Xem thêm](app://obsidian.md/index.html#Examples).