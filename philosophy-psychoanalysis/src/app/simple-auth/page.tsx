'use client'

export default function SimpleAuthPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', background: '#f3f4f6' }}>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        background: 'white',
        padding: '30px',
        borderRadius: '8px'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333'
        }}>
          简化登录测试
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>
            邮箱：
          </label>
          <input
            type="email"
            id="demo-email"
            value="demo@philosophy.com"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            readOnly
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>
            密码：
          </label>
          <input
            type="password"
            id="demo-password"
            value="demo123"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            readOnly
          />
        </div>

        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            演示账号：<br/>
            邮箱: <strong>demo@philosophy.com</strong><br/>
            密码: <strong>demo123</strong>
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => testLogin()}
            style={{
              backgroundColor: '#0284c7',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            测试登录
          </button>
        </div>

        <div id="result" style={{
          marginTop: '20px',
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: '#f8f9fa',
          textAlign: 'center'
        }}>
          点击测试按钮查看结果
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            访问：
          </p>
          <p>
            <a href="http://localhost:3003/auth/login" target="_blank"
              style={{ color: '#0284c7', textDecoration: 'underline' }}>
              实际登录页面
            </a>
          </p>
          <p>
            <a href="http://localhost:3003" target="_blank"
              style={{ color: '#0284c7', textDecoration: 'underline' }}>
              主页（应跳转到登录）
            </a>
          </p>
          <p>
            <a href="http://localhost:3003/api/auth" target="_blank"
              style={{ color: '#0284c7', textDecoration: 'underline' }}>
              API 端点
            </a>
          </p>
        </div>
      </div>

      <script dangerouslySetInnerHTML={`
        async function testLogin() {
          const email = document.getElementById('demo-email').value;
          const password = document.getElementById('demo-password').value;
          const resultDiv = document.getElementById('result');

          resultDiv.innerHTML = '⏳ 正在测试登录...';

          try {
            const response = await fetch('http://localhost:3003/api/auth', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
              resultDiv.innerHTML = '🎉 登录成功！<br/>用户：' +
                data.user.displayName +
                '<br/>邮箱：' + data.user.email;

              // 存储到 localStorage
              localStorage.setItem('philosophy-user', JSON.stringify(data.user));
              alert('登录成功！');
            } else {
              resultDiv.innerHTML = '❌ 登录失败：<br/>' + data.error;
            }
          } catch (error) {
            resultDiv.innerHTML = '❌ 错误：<br/>' + error.message;
          }
        }
      `} />
    </div>
  )
}