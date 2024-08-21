var id_data = 1000;



// Load footer
var userLogin;
function attachEvents() {
  $(document).ready(function () {
    userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if(userLogin) {
      document.getElementById('username').innerText = userLogin.name;
    } else {
      alert(21)
      document.getElementById('username').innerText = '';
    }
    $('#form-login').on('submit', function (e) {
      e.preventDefault()
      var tem = true

      if ($('#email').val().trim() === '') {
        $('#email').next().text("Nhập mật khẩu")
        tem = false
      }

      if ($('#password').val().trim() === '') {
        $('#password').next().text("Nhập mật khẩu")
        tem = false
      }

      if (tem) {
        for (var i = 0; i < data.length; i++) {
          // Kiểm tra điều kiện
          if (data[i].email === $('#email').val() && data[i].password === $('#password').val()) {
            alert("Đăng nhập thành công!")
            userLogin = data[i]
            $('.login-form-container').removeClass('active')
            $('#login-btn').addClass('d-none')
            localStorage.setItem('user', JSON.stringify(userLogin));
            if(userLogin) {
              document.getElementById('username').innerText = userLogin.name;
            } else {
              document.getElementById('username').innerText = '';
            }
            break; // Dừng vòng lặp
          } 
        }
        if(!userLogin) {
            alert("Email hoặc mật khẩu sai!")
        }
      }
    })

    $('#login-btn').click(function () {
      $('.login-form-container').toggleClass('active')
    })
    $('#form-close').click(function () {
      $('.login-form-container').removeClass('active')
    })
    $('#dangky').click(function () {
      $('.login-form-container').removeClass('active')
      // $('.modal').modal('show'); // Show the registration form
    });
    var obj = {
      'fullname': [/^[^\d]+$/, 'Nhập tên', 'Tên sai định dạng (không được có số)'],
      'email': [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Nhập email', 'Email sai định dạng'],
      'phonenumber': [/^\d{10}$/, 'Nhập số điện thoại', 'Số điện thoại phải có đủ 10 chữ số'],
      'password': ['', 'Nhập mật khẩu', 'aa']
    }

    // Thực hiện khi input trống
    function checkRong(selector, name) {
      $(selector).addClass('invalid')
      $(selector).next().text(obj[name][1])
      return false
    }

    // Hàm kiểm tra điều kiện dữ liệu vào
    function checkSai(selector, name) {
      var value = $(selector).val()
      // Điều kiện sai trả về false
      if (!obj[name][0].test(value)) {
        $(selector).next().text(obj[name][2])
        return false
      }
      return true
    }

    // Kiểm tra lỗi khi blur ra ngoài
    var inputs = $('input');
    inputs.not(inputs.last()).blur(function () {
      var name = $(this).attr("id")
      if ($(this).val().trim()) {
        checkSai(this, name)
      } else {
        checkRong(this, name)
      }
    })

    $('#confirm').blur(function () {
      if (this.value !== $('#password').val()) {
        $('#confirm').next().text("Xác nhận sai")
      }
    })

    // Xóa lỗi ngay khi nhập kí tự vào ô input
    $('input').on('input', function () {
      $(this).next().text('')
      $(this).removeClass('invalid')
    })

    //thực hiện khi kích nút button
    $('#form').on('submit', function (e) {
      e.preventDefault()
      var check = true
      var tem = true

      for (var name in obj) {
        if (name !== "password") {
          var id = '#' + name
          if ($(id).val().trim()) {
            check = checkSai(id, name)
          } else {
            check = checkRong(id, name)
          }

          if (!check) {
            tem = check
          }
        }
      }

      if ($('#password').val().trim() === '') {
        $('#password').next().text("Nhập mật khẩu")
        tem = false
      }
      if ($('#confirm').val() !== $('#password').val()) {
        $('#confirm').next().text("Xác nhận sai")
        tem = false
      }

      if (tem) {
        id_data = id_data + 1

        var formData = {
          id: id_data,
          name: $('#fullname').val(),
          age: 0,
          address: "",
          phone: $('#phonenumber').val(),
          email: $('#email').val(),
          password: $('#password').val()
        }

        data.push(formData)
        alert("Đăng ký thành công!")
        $('input').val("")

      }
    })

    $('#password, #confirm').on('input', function () {
      var inputText = this.value;
      var englishText = convertToEnglish(inputText);
      this.value = englishText;
    });

    $('.back').click(function () {
      $('input').val("")
      $('input').next().text('')
      $('.login-form-container').toggleClass('active')

    })
  });
}


function convertToEnglish(vietnameseText) {
  var englishText = '';
  // Mảng ánh xạ các ký tự tiếng Việt sang tiếng Anh
  var vietnameseToEnglishMap = {
    'á': 'as', 'à': 'af', 'ả': 'ar', 'ã': 'ax', 'ạ': 'aj',
    'ă': 'aw', 'ắ': 'aws', 'ằ': 'awf', 'ẳ': 'awr', 'ẵ': 'awx', 'ặ': 'awj',
    'â': 'aa', 'ấ': 'aas', 'ầ': 'aaf', 'ẩ': 'aar', 'ẫ': 'aax', 'ậ': 'aaj',
    'đ': 'dd',
    'é': 'es', 'è': 'ef', 'ẻ': 'er', 'ẽ': 'ex', 'ẹ': 'ej',
    'ê': 'ee', 'ế': 'ees', 'ề': 'eef', 'ể': 'eer', 'ễ': 'eex', 'ệ': 'eej',
    'í': 'is', 'ì': 'if', 'ỉ': 'ir', 'ĩ': 'ix', 'ị': 'ij',
    'ó': 'os', 'ò': 'of', 'ỏ': 'or', 'õ': 'ox', 'ọ': 'oj',
    'ô': 'oo', 'ố': 'oos', 'ồ': 'oof', 'ổ': 'oor', 'ỗ': 'oox', 'ộ': 'ooj',
    'ơ': 'ow', 'ớ': 'ows', 'ờ': 'owf', 'ở': 'owr', 'ỡ': 'owx', 'ợ': 'owj',
    'ú': 'us', 'ù': 'uf', 'ủ': 'ur', 'ũ': 'ux', 'ụ': 'uj',
    'ư': 'uw', 'ứ': 'uws', 'ừ': 'uwf', 'ử': 'uwr', 'ữ': 'uwx', 'ự': 'uwj',
    'ý': 'ys', 'ỳ': 'yf', 'ỷ': 'yr', 'ỹ': 'yx', 'ỵ': 'yj',
    'Á': 'As', 'À': 'Af', 'Ả': 'Ar', 'Ã': 'Ax', 'Ạ': 'Aj',
    'Ă': 'Aw', 'Ắ': 'Aws', 'Ằ': 'Awf', 'Ẳ': 'Awr', 'Ẵ': 'Awx', 'Ặ': 'Awj',
    'Â': 'Aa', 'Ấ': 'Aas', 'Ầ': 'Aaf', 'Ẩ': 'Aar', 'Ẫ': 'Aax', 'Ậ': 'Aaj',
    'Đ': 'Dd',
    'É': 'Es', 'È': 'Ef', 'Ẻ': 'Er', 'Ẽ': 'Ex', 'Ẹ': 'Ej',
    'Ê': 'Ee', 'Ế': 'Ees', 'Ề': 'Eef', 'Ể': 'Eer', 'Ễ': 'Eex', 'Ệ': 'Eej',
    'Í': 'Is', 'Ì': 'If', 'Ỉ': 'Ir', 'Ĩ': 'Ix', 'Ị': 'Ij',
    'Ó': 'Os', 'Ò': 'Of', 'Ỏ': 'Or', 'Õ': 'Ox', 'Ọ': 'Oj',
    'Ô': 'Oo', 'Ố': 'Oos', 'Ồ': 'Oof', 'Ổ': 'Oor', 'Ỗ': 'Oox', 'Ộ': 'Ooj',
    'Ơ': 'Ow', 'Ớ': 'Ows', 'Ờ': 'Owf', 'Ở': 'Owr', 'Ỡ': 'Owx', 'Ợ': 'Owj',
    'Ú': 'Us', 'Ù': 'Uf', 'Ủ': 'Ur', 'Ũ': 'Ux', 'Ụ': 'Uj',
    'Ư': 'Uw', 'Ứ': 'Uws', 'Ừ': 'Uwf', 'Ử': 'Uwr', 'Ữ': 'Uwx', 'Ự': 'Uwj',
    'Ý': 'Ys', 'Ỳ': 'Yf', 'Ỷ': 'Yr', 'Ỹ': 'Yx', 'Ỵ': 'Yj'
  };

  // Duyệt qua từng ký tự trong dữ liệu đầu vào
  for (var i = 0; i < vietnameseText.length; i++) {
    var char = vietnameseText.charAt(i);
    // Kiểm tra xem ký tự có trong bảng ánh xạ không
    if (vietnameseToEnglishMap[char] !== undefined) {
      englishText += vietnameseToEnglishMap[char];
    } else {
      // Nếu không, thêm ký tự gốc vào chuỗi tiếng Anh
      englishText += char;
    }
  }
  return englishText;
}


// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-main').innerHTML = data;
            // Uncomment the line below if you have an attachEvents function
            // attachEvents();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });