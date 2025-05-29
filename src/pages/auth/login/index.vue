<script setup lang="ts">
  const router = useRouter()
  const login = () => {
    localStorage.setItem('authToken', 'abcd');
    router.push('/') // Navigate after login
}

</script>

<template>
  <div class="login-wrapper">
      <div class="login-container">
       <div class="content">
          <div class="img-wrapper">
            <img src="@/assets/logo.png" alt="img">
          </div>

         <div class="title">
           <h3>cPanel</h3>
         </div>

          <div class="sub-title">
            <p>Lorem ipsum dolor sit amet, </p>
          </div>

         <div class="text-content">
           <p>Lorem ipsum dolor sit.</p>
           <p>Lorem ipsum dolor sit .</p>
           <p>Lorem ipsum dolor sit .</p>
           <p>Lorem ipsum dolor sit .</p>
         </div>

       </div>
        <div class="login-form">
          <a href="">im here</a>
        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
    $primary-color: #2c5aa0;
    $secondary-color: #1e4a8c;
    $accent-color: #ff6b35;
    $success-color: #27ae60;
    $danger-color: #e74c3c;
    $warning-color: #f39c12;
    $text-dark: #2c3e50;
    $text-muted: #7f8c8d;
    $text-light: #ecf0f1;
    $border-color: #e0e6ed;
    $bg-light: #f8f9fa;
    $bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    $shadow-light: 0 2px 10px rgba(0, 0, 0, 0.1);
    $shadow-medium: 0 4px 20px rgba(0, 0, 0, 0.15);
    $shadow-heavy: 0 8px 40px rgba(0, 0, 0, 0.2);

    .login-wrapper{
      background-color: white;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;


      .login-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 500px;
        box-shadow: $shadow-heavy;
        height: 550px;
        background: $bg-gradient;
        border-radius: 10px;
        .content{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          animation: float 20s ease-in-out infinite;
          padding: 2rem;
          .img-wrapper{
            width: 50px;
            height: 50px;
            img{
              width: 100%;
            }
          }

          .sub-title{
            font-size: small;
          }

          .text-content{
            margin: 1rem;
            font-size: small;
           p{
             margin: .5rem 0;
           }
          }

        }

        .login-form{
          border-radius: 0  10px 10px 0 ;
          background: white;
        }
      }
    }


</style>

