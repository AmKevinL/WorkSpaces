
---
created: 2023-01-20T03:29:59 (UTC +07:00)
tags: []
source: https://momentjs.com/docs/#/displaying/format/
author: 
---

# Moment.js | Tài liệu

> ## Excerpt
> Moment.js has been successfully used in millions of projects, and we are happy to have contributed to making date and time better on the web.
As of September 2020, Moment gets over 12 million downloads per week!  However, Moment was built for the previous era of the JavaScript ecosystem.
The modern web looks much different these days.  Moment has evolved somewhat over the years, but it has essentially the same design as it did when it was created in 2011.
Given how many projects depend on it, we choose to prioritize stability over new features.

---
```js
moment().format();
moment().format(String);
```

Đây là tùy chọn hiển thị mạnh mẽ nhất. Nó lấy một chuỗi mã thông báo và thay thế chúng bằng các giá trị tương ứng của chúng.

```javascript
moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment().format("[Today is] dddd");               // "Today is Sunday"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"
```

