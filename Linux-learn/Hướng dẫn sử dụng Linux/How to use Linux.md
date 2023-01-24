
#  Hướng dẫn sử dụng Linux kill app

Chuyển đến thiết bị đầu cuối và giết quy trình snap-store trước khi cài đặt / làm mới snap-store.

Tìm quy trình với ps aux | grep snap

Tìm kiếm quy trình snap-store, có vẻ như thế này
``
... <process id> ... ... /snap/snap-store/???/usr/bin/snap-store.``
Giết quá trình bằng id quy trình tìm thấy ở trên:

```python
kill <process id>
```
Cài đặt / làm mới snap-store:

Đóng ứng dụng gnome "phần mềm Ubuntu" nếu nó mở.

Làm mới cửa hàng snap:

```python
sudo snap refresh snap-store
```


Có cùng một vấn đề và sửa nó theo cách này.
