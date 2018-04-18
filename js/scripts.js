 window.onload=function(){
        //caidandianjiyincangxiaoguo
        $(".nav_sj_an").click(function(){
            $(".nav_sj").toggleClass("nav_sj_dh");
        });

        //shubiaogundongdaohangdonghua
        $(window).on("scroll",function(){
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
          $(".nav").addClass("navadd");
          } else {
          $(".nav").removeClass("navadd");
          }
        });

        //shubiaobianjidaohangduiyingbianse
        $(".nav_bs").find('a').on("click", function() {
            $(".nav_bs").find('a').removeClass('active');
            $(this).addClass('active');
        });

        $(".nav_bs").find('button').on("click", function() {
            $(".nav_bs").find('button').removeClass('active');
            $(this).addClass('active');
        });


        $('.autoplay').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          swipe:false,
          touchMove:false,
          draggable: false,

      });
      // $("#owl-demo").owlCarousel({
      //       items: 1,
      //       itemsDesktop: [1000, 1],
      //       itemsDesktopSmall: [768, 1],
      //       itemsTablet: [568, 1],
      //       lazyLoad: true,
      //       autoPlay: true,
      //       pagination: true,
      //       stopOnHover: true,
      //       navigation: false
      //   });


      var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
      };
      var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
      };
      TxtType.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

          var that = this;
          var delta = 200 - Math.random() * 100; //type and backspace speed

          if (this.isDeleting) {
              delta /= 3;
          } //backspace speed

          if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500; // time for new sentence
          }

          setTimeout(function() {
              that.tick();
          }, delta);
      };