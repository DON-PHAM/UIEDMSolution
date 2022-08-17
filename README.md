# EDM Solution
- Cấu hình Customize-cra cấu hình Webpack
  -- npm i customize-cra react-app-rewired --dev
- Cấu hình Babel để đường dẫn gọn gàng
  + chuyển đổi cú pháp đường dẫn
  -- https://github.com/tleunen/babel-plugin-module-resolver
  -- npm install --save-dev babel-plugin-module-resolver
  -- Từ khóa customize-cra babel cấu hình trong file config-overrides.js
- Cài đặt thư viện SASS
   -- npm i -D sass

- Cài đặt thư viện react-router-dom
   -- npm i react-router-dom
- Cài đặt npm i classnames

## Cấu trúc thư mục base
- assets : Chứa ảnh, videos, files
- components : chứa các folder component, trong mỗi folder là các file component
- configs : Chứa các config hệ thống
- contansts : chứa các hàng số, enum
- layouts : Chưa layout hệ thống
- pages : Màn hình các trang
- routes : chứa định tuyến của chương trình
- services : Gọi api
- utils : các hàm sử dụng nhiều lần sẽ được đặt ở đây