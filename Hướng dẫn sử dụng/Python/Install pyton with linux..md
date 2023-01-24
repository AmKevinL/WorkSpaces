# Hướng dẫn cài đặt #Python trên #Linux
Để download **Python**, bạn truy cập địa chỉ:

-   [https://www.python.org/downloads/](https://www.python.org/downloads/)
- ![](https://s1.o7planning.com/vi/11383/images/7091429.png)
# Cài đặt Python
---
created: 2023-01-24T14:23:43 (UTC +07:00)

---

#Cài #đặt #Python trên #Ubuntu 

---
Trước hết bạn cần giải nén file mà bạn vừa download được ở bước trên.

![[Pasted image 20230124142708.png]]

![[Pasted image 20230124142729.png]]

Mở **"Terminal"** và CD vào thư mục mà bạn có được sau khi giải nén ở bước trên.

![[Pasted image 20230124142748.png]]

Đăng nhập vào với quyền ADMIN:

```console


sudo su
```

![[Pasted image 20230124142818.png]]

Cài đặt:

```console
./configure
```

!![[Pasted image 20230124142846.png]]

Lệnh _**"./configure"**_ đã thực hiện xong.

![[Pasted image 20230124142923.png]]

Thực hiện tiếp lệnh _**"make"**_ để tạo các file.

```console

make
```

![[Pasted image 20230124142948.png]]

![[Pasted image 20230124143009.png]]

OK, tới đây bạn đã cài đặt xong **Python**, bạn cần kiểm tra lại. Chạy lệnh **"python"** để làm việc với **Python**:

![[Pasted image 20230124143023.png]]

Thực thi một vài đoạn mã **Python**:

```text

print ("Hello Python");

1 + 2
```

![[Pasted image 20230124143059.png]]

# Các IDE cho Python

Để lập trình **Python** bạn cần một **IDE (Integrated development environment)**, **IDE** là một công cụ hỗ trợ bạn viết code dễ dàng hơn. Các IDE dưới đây hỗ trợ **Python**:

1.  [[PyCharm]]
2.  [[Eclipse]] (Cần cài đặt PyDev plugin vào Eclipse)
