# Front Matter Title

__Also known as `Meta Title Filename`__

Đây là một plugin cho [Obsidian](https://obsidian.md).

# Api
Tìm kiếm sự tích hợp? Cố gắng [API provider](https://github.com/Snezhig/front-matter-plguin-api-provider).

# Introduction

Plugin **không đổi tên tệp**,
nó chỉ sử dụng giá trị cụ thể từ khối meta của tệp đánh dấu dưới dạng tên tệp được hiển thị trong trình khám phá hoặc biểu đồ.
> Giá trị từ khóa cụ thể **phải là** một chuỗi hoặc một số hoặc một mảng (danh sách)

# Installation (one of)

* Download in from Obsidian through `Community plugins`
(Tải xuống từ Obsidian thông qua `Plugin cộng đồng`)
* Use [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin
* Download `obsidian-front-matter-title-#LAST_RELEASE#.zip`
  from [last release](https://github.com/Snezhig/obsidian-front-matter-title/releases/latest/) and unpack it into your
  vault by path: `.obsidian/plugins`

# Template

## Values

Plugin có thể sử dụng các giá trị trích xuất từ ​​khối meta, thông tin tệp hoặc tiêu đề.

Ngoài ra, mẫu có thể được đặt thành `path.to.value` và plugin sẽ cố lấy giá trị từ trường `path`, sau đó từ trường `đến`
và cuối cùng là từ trường `giá trị`. [Xem thêm](#Ví dụ).
### Meta block

Mẫu là một chuỗi sẽ được sử dụng để giải quyết tiêu đề cho tệp

Bất kỳ giá trị nào trong mẫu đều có nghĩa là khóa từ khối meta của tệp
### File info

Nếu bạn thêm tiền tố `_` vào mẫu của mình, plugin sẽ sử dụng các giá trị
từ [Tệp](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) object

Ví dụ: `_basename` có nghĩa là plugin sẽ sử dụng giá trị từ trường `basename`
### Heading

Nếu bạn đặt mẫu là `#heading`, trước tiên plugin sẽ chuyển hướng từ tệp

## Types

### Simple template

Bất kỳ chuỗi nào trong mẫu của bạn sẽ được sử dụng như một khóa duy nhất### Composite template

Nếu bạn muốn sử dụng một số giá trị cho tiêu đề, bạn có thể sử dụng `{{ }}` để plugin sử dụng từng giá trị bên trong ``{{ }}`` làm giá trị
chìa khóa cá nhân# ví dụ

Ví dụ: bạn có thể có khối meta sau:

```yaml
alias:
  - MPI
status: open
short: 'PI'
tags:
  - '#project'
  - '#improvement'
date_updated: '2022-03-04 22:42:50'
additional:
  author: Snezhig
  title: Project ideas

```

Và nội dung sau:
```markdown
# First Heading

Một số thông tin

# Second Heading
```

|          Template           | Original filename | Displayed filename |
|:---------------------------:|:-----------------:|:------------------:|
|           `short`           |   202110151351    |        `PI`        |
|     `additional.title`      |   202110151351    |  `Project Ideas`   |
|        `not_exists`         |   202110151351    |   `202110151351`   |
|        `additional`         |   202110151351    |   `202110151351`   |
|           `tags`            |   202110151351    |     `#project`     |
|         `#heading`          |   202110151351    |  `First Heading`   |
|  `{{short}} - {{status}}`   |   202110151351    |    `PI - open`     |
| `{{tags}} - {{additional}}` |   202110151351    |   `# project - `   |

> **Nếu bạn chỉ sử dụng một giá trị, hãy sử dụng `short` thay vì `{{short}}` để có hiệu suất tốt hơn**

# Features

## Alias

> Sửa đổi bộ đệm frontmatter để thêm hoặc thay thế bí danh hoặc chỉ đảm bảo rằng bí danh tồn tại

|                Disabled                 |               Enabled               |
|:---------------------------------------:|:-----------------------------------:|
| ![](./resources/img/Alias%20Off.png) | ![](./resources/img/Alias%20On.png) |

## Explorer

> Hiển thị tiêu đề trong trình khám phá tệp của ứng dụng

|                Disabled                 |                Enabled                 |
|:---------------------------------------:|:--------------------------------------:|
| ![](./resources/img/Explorer%20Off.png) | ![](./resources/img/Explorer%20On.png) |

## Explorer Sort

> Sắp xếp tệp theo tiêu đề tùy chỉnh. Chỉ khả dụng nếu Explorer được bật

|                Disabled                |                  Enabled                   |
|:--------------------------------------:|:------------------------------------------:|
| ![](./resources/img/Explorer%20On.png) | ![](./resources/img/ExplorerSort%20On.png) |

## Graph

> Hiển thị tiêu đề trong biểu đồ của ứng dụng và biểu đồ cục bộ

|               Disabled               |               Enabled               |
|:------------------------------------:|:-----------------------------------:|
| ![](./resources/img/Graph%20Off.png) | ![](./resources/img/Graph%20On.png) |

## Header

> Hiển thị tiêu đề trong tiêu đề của tệp đã mở

|                Disabled                |                Enabled                |
|:--------------------------------------:|:-------------------------------------:|
| ![](./resources/img/Heading%20Off.png) | ![](./resources/img/Heading%20On.png) |

## Starred

> Display title in starred window

|                Disabled                |                Enabled                |
|:--------------------------------------:|:-------------------------------------:|
| ![](./resources/img/Starred%20Off.png) | ![](./resources/img/Starred%20on.png) |

## Search

> Display titles in the search window

|               Disabled                |               Enabled                |
|:-------------------------------------:|:------------------------------------:|
| ![](./resources/img/Search%20Off.png) | ![](./resources/img/Search%20On.png) |

## Suggest

> Display titles in suggest modal\windows.

|                  Disabled                  |                  Enabled                  |
|:------------------------------------------:|:-----------------------------------------:|
| ![](./resources/img/Suggest%20Off%201.png) | ![](./resources/img/Suggest%20On%201.png) |
| ![](./resources/img/Suggest%20Off%202.png) | ![](./resources/img/Suggest%20On%202.png) |

## Tab

> Hiển thị tiêu đề trong tab của lá

|              Disabled              |              Enabled              |
|:----------------------------------:|:---------------------------------:|
| ![](./resources/img/Tab%20Off.png) | ![](./resources/img/Tab%20On.png) |

## Thank you

If you like this plugin and would like to buy me a coffee, you can!

<a href="https://www.buymeacoffee.com/snezhig" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## Note

Vui lòng viết về các lỗi, sai lầm hoặc ý tưởng cho plugin này.