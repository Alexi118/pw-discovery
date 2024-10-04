/*
# Javascript
## Đề bài:
Chuỗi (string) là một tập hợp các ký tự nối liền nhau. Trong bài tập này, bạn sẽ viết một hàm để đảo ngược chuỗi, tức là sắp xếp các ký tự của chuỗi theo thứ tự ngược lại.

### Yêu cầu:
Viết một hàm JavaScript có tên reverseString để đảo ngược một chuỗi đầu vào.
Sau khi đảo ngược chuỗi, in ra kết quả.
*/

const str:string = 'olleh'
let newStr:string = ''

function reverseString(str:string){
    for(let i=str.length-1; i>=0; i--){
        newStr = newStr + str[i]
    }
    return newStr
}

console.log(reverseString(str))

/*
# Playwright
Viết code automation cho test case sau (có thể sử copy code từ bài trước để code nhanh hơn)
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào đầy đủ các thông tin của user
- Kiểm tra kết quả đúng như thông tin đã điền.
*/
import {test,expect} from '@playwright/test'


