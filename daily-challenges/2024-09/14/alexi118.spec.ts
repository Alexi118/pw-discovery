/*
# Javascript
## Đề bài:
Chỉ số BMI (Body Mass Index) là một chỉ số được sử dụng để đánh giá mức độ béo hay gầy của một người, từ đó xác định tình trạng sức khỏe của cơ thể dựa trên chiều cao và cân nặng. Công thức tính BMI như sau:

```
BMI = cân nặng (kg) / (chiều cao (m) * chiều cao (m))
```

### Yêu cầu:
- Viết một hàm JavaScript có tên `calculateBMI` để tính chỉ số BMI dựa trên chiều cao (đơn vị mét) và cân nặng (đơn vị kg) của người dùng.
- Sau khi tính toán, in ra kết quả với các phân loại theo chuẩn sau:
  - BMI < 18.5: "Gầy"
  - 18.5 <= BMI < 24.9: "Bình thường"
  - 25 <= BMI < 29.9: "Thừa cân"
  - BMI >= 30: "Béo phì"
*/

const weight:number = 84;
const height:number = 1.75;

function calculateBMI(w:number,h:number){
    let bmi:number = 0;
    bmi = w/(h*h);

    console.log(bmi)

    if(bmi<18.5){
        return "Gầy"
    }
    if(18.5 <= bmi && bmi < 24.9){
        return "Bình thường"
    }
    if(25 <= bmi && bmi < 29.9){
        return "Thừa cân"
    }
    if(bmi >=30){
        return "Béo phì"
    }
}

console.log(calculateBMI(weight,height))

/*
# Playwright
## Đề bài
Viết code automation cho test case sau:
- Đi tới trang: https://material.playwrightvn.com/
- Click vào: Bài học 1: Register Page (có đủ các element)
- Điền vào username, email. Click button register.
- Kiểm tra kết quả có chứa username và email tương ứng
*/
import {test,expect} from '@playwright/test'

test.describe('Bai tap mot',()=>{
    const name:string = 'Nguyen Duc Cuong';
    const email:string = 'cuongnd@gmail.com'

    test('Register username and email',async({page})=>{
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('a[href="01-xpath-register-page.html"]').click();
        await page.locator('#username').fill(name);
        await page.locator('#email').fill(email);
        await page.locator('button[type=submit]').click();
        expect(page.locator('#userTable tbody tr:nth-last-child(1) td:nth-child(2)')).toHaveText(name)
        expect(page.locator('#userTable tbody tr:nth-last-child(1) td:nth-child(3)')).toHaveText(email)
    })
})
