## Project Description
The Personal Debt Tracking Application provides a platform where users can track their debt status, view payment plans, and add new debts. This application is developed using React and TypeScript, with state management handled by Redux.

## Application Pages and Functions

*1. Register.tsx:* On successful user registration, the user is redirected to the `Dashboard` page. It collects the user's first name, last name, email, username, and password. All fields are required.

*2. Login.tsx*: When the login button is clicked, the user is redirected to the `Dashboard` page.

*3. Dashboard.tsx:* After logging in, the user can see the total debt, paid debt, and upcoming payment dates. If the user is not logged in, they are redirected to the `Login` page.

*4. Debt.tsx:* Allows users to view the payment plans for their debts.

## Technical Details

*1. authSlice.ts:* Manages user session status. Handles login and logout actions. Maintains `isAuthenticated` and `user` states. Contains `login` and `logout` reducers.

*2. store.ts:* Configures the Redux store.

*3. index.tsx:* Wraps the application with the Redux `Provider`.

## Getting Started

cd finance-frontend

npm install

npm start


## Proje Açıklaması

Kişisel Borç Takip Uygulaması, kulllanıcıların borç durumlarını takip edebilecekleri, ödeme planlarını görebilecekleri ve yeni ekleyebilecekleri bir platform sağlar. Bu uygulama, React ve TypeScript kullanılarak geliştirilmiş ve Redux ile state management sağlanmıştır.

## Uygulama Sayfaları ve İşlevleri

*1. Register.tsx:* Kullanıcı kaydı başarılı olursa kullanıcı `Dashboard` sayfasına yönlendirilir. Kullanıcıdan isim, soyisim, e-posta, kullanıcı adı ve şifre bilgileri alınır. Tüm alanların doldurulması zorunludur.

*2. Login.tsx:* Giriş butonuna tıklandığında kullanıcı `Dashboard` sayfasına yönlendirilir.

*3. Dashboard.tsx:* Kullanıcı sisteme giriş yaptıktan sonra toplam borç, ödenen borç ve yaklaşan ödeme tarihlerini görebilir. Kullanıcı giriş yapmadıysa `Login` sayfasına yönlendirilir.

*4. Debt.tsx:* Kullanıcıların borçlarına ait ödeme planlarını görmelerini sağlar.

## Teknik Detaylar

*1. authSlice.ts:* Kullanıcı oturum durumunu yönetir. Giriş-çıkış işlemlerini handle eder. `isAuthenticated` ve `user` state'lerini tutar. `login` ve `logout` reducer'larını içerir.

*2. store.ts:* redux store'u konfigüre eder.

*3. index.tsx:* redux `Provider` ile uygulamayı sarmalar.

## Projeye Giriş

*cd finance-frontend*  

*npm install*  

*npm start*
