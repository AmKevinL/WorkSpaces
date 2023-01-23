## Obsidian API

Type definitions for the latest [Obsidian](https://obsidian.md) API.

### Documentation

Tất cả tài liệu về API nằm trong tệp `obsidian.d.ts`.
Điều này sẽ bao gồm các loại, thuộc tính, phương thức và nhận xét giải thích mọi thứ hoạt động như thế nào.

Để biết ví dụ đầy đủ về cách tạo plugin Obsidian, hãy sử dụng mẫu tại https://github.com/obsidianmd/obsidian-sample-plugin
### Plugin structure

`manifest.json`

- `id` ID plugin của bạn.
- `name` tên hiển thị plugin của bạn.
- `tác giả` tên của tác giả plugin.
- `version` phiên bản plugin của bạn.
- `minAppVersion` phiên bản Obsidian tối thiểu được yêu cầu cho plugin của bạn.
- `mô tả` mô tả dài về plugin của bạn.
- `authorUrl` (tùy chọn) một URL tới trang web của riêng bạn.
- `isDesktopOnly` cho dù plugin của bạn sử dụng API NodeJS hay Electron.
`main.js`

- Đây là điểm vào chính của plugin của bạn.
- Nhập bất kỳ API Obsidian nào bằng cách sử dụng `require('obsidian')`
- Nhập API NodeJS hoặc Electron bằng cách sử dụng `require('fs')` hoặc `require('electron')`
- Phải xuất một lớp mặc định mở rộng `Plugin`
- Phải gói tất cả các phần phụ thuộc bên ngoài vào tệp này, sử dụng Rollup, Webpack hoặc một trình đóng gói javascript khác.

### Kiến trúc ứng dụng

##### Ứng dụng được tổ chức thành một vài mô-đun chính:

- `Ứng dụng`, đối tượng toàn cầu sở hữu mọi thứ khác. Bạn có thể truy cập thông qua `this.app` bên trong plugin của mình. Giao diện `Ứng dụng` cung cấp trình truy cập cho các giao diện sau.
- `Vault`, giao diện cho phép bạn tương tác với các tệp và thư mục trong kho tiền.
- `Không gian làm việc`, giao diện cho phép bạn tương tác với các ô trên màn hình.
- `MetadataCache`, giao diện chứa siêu dữ liệu được lưu trong bộ nhớ cache về mỗi tệp đánh dấu, bao gồm tiêu đề, liên kết, nhúng, thẻ và khối.
##### Ngoài ra, bằng cách kế thừa `Plugin`, bạn có thể:
- Thêm biểu tượng ruy-băng bằng cách sử dụng `this.addRibbonIcon`.
- Thêm phần tử thanh trạng thái (dưới cùng) bằng cách sử dụng `this.addStatusBarItem`.
- Thêm một lệnh chung, tùy chọn với một phím nóng mặc định, sử dụng `this.addCommand`.
- Thêm tab cài đặt plugin bằng cách sử dụng `this.addSettingTab`.
- Đăng ký một loại chế độ xem mới bằng cách sử dụng `this.registerView`.
- Lưu và tải dữ liệu plugin bằng cách sử dụng `this.loadData` và `this.saveData`.
##### Registering events

Để đăng ký sự kiện từ bất kỳ giao diện sự kiện nào, chẳng hạn như `Ứng dụng` và `Không gian làm việc`, vui lòng sử dụng `this.registerEvent`, sẽ tự động tách trình xử lý sự kiện của bạn khi plugin của bạn không tải:```
this.registerEvent(app.on('event-name', callback));
```

If you register DOM events for elements that persist on the page after your plugin unloads, such as `window` or `document` events, please use `this.registerDomEvent`:
```
this.registerDomEvent(element, 'click', callback);
```

If you use `setInterval`, please use `this.registerInterval`:
```
this.registerInterval(setInterval(callback, 1000));
```
