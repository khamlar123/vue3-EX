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
            <img alt="img" src="@/assets/logo.png">
          </div>

         <div class="title">
           <h3>cPanel</h3>
         </div>

          <div class="sub-title">
            <p>web Hosting Control Panel</p>
          </div>

         <div class="text-content">
           <p>Lorem ipsum dolor sit.</p>
           <p>Lorem ipsum dolor sit .</p>
           <p>Lorem ipsum dolor sit .</p>
           <p>Lorem ipsum dolor sit .</p>
         </div>

       </div>
        <div class="login-form">
          <div class="title">
            <h3>Welcome back</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="input-item">
            <label for="">User name</label>
            <input placeholder="user name" type="text" >
          </div>

          <div class="input-item">
            <label for="">Password</label>
            <input placeholder="password" type="password" >
          </div>

          <div class="item">
            <div class="remember-me">
              <input id="remember" type="checkbox"  />
              <label for="remember">Remember Me</label>
            </div>

            <div class="forget">
              <a href="javascript:void(0)">Forgot password?</a>
            </div>
          </div>

          <div class="action">
            <button class="btn-add" @click="login()">Sign In</button>
          </div>

          <div class="connect-with" >
            <p for="">or continue with</p>
          </div>

          <div class="media">
            <button class="btn-add google">Google</button>
            <button class="btn-add microsoft">Microsoft</button>
          </div>


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
        font-size: small;
        grid-template-columns: 1fr 1fr;
        width: 600px;
        box-shadow: $shadow-heavy;
        height: 550px;
        background: $bg-gradient;
        border-radius: 10px;

        overflow: auto;
        .content{
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          animation: float 20s ease-in-out infinite;
          padding: 2rem;
          min-width: 260px;
          .img-wrapper{
            width: 50px;
            height: 50px;
            img{
              width: 100%;
            }
          }



          .text-content{
            margin: 1rem;
           p{
             margin: .5rem 0;
           }
          }

        }

        .login-form{
          border-radius: 0  10px 10px 0 ;
          background: white;
          padding: 2rem;
          color: $text-muted;
            .title{
              text-align: center;
              h3{
                color: #1e1e1e;
              }
            }

          .input-item{
            margin-top: 1.5rem;
            input{
              margin-top: 0.5rem;
              width: 100%;
            }
          }

          .item{
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .remember-me {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 12px;
              cursor: pointer;

              &input[type="checkbox"]{
                width: 16px;
                height: 16px;
                accent-color: #007bff; /* Customize checkbox color */
                cursor: pointer;
              }
              label {
                cursor: pointer;
              }

            }

            .forget{
             //
            }
          }

          .action {
            button{
              margin-top: 1.5rem;
              width: 100%;
              background: $bg-gradient;
            }
          }

          .connect-with{
            margin-top: 3rem;
            width: 100%;
            border-top: 2px solid $border-color;
            position: relative;
            p{
              width: 120px;
              padding: 0 0.5rem;
              text-align: center;
              background: white;
              position: absolute;
              top: -12px;
              left: 25%;
            }
          }

          .media{
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            button{
              width: 100%;
              background: none;
              border: 1px solid  $border-color;
            }

            .google{
              color: $danger-color;
            }

            .microsoft{
              color: $secondary-color;
            }
          }
        }
      }

      @media(max-width: 768px) {
        .login-container{
          grid-template-columns: 1fr;

        }
      }

    }


</style>

