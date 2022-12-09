<template>
  <div class="about-container">
    <!-- 头部 -->
    <Header/>
    <ToTopAndNav/>
    <!-- 主体 -->
    <main class="main">
      <!-- 主题第一部分 个人简介 -->
      <div class="personal" id="ABOUT">
        <div class="box pageWidth">
          <div class="title">WHO <span>AM I?</span></div>
          <div class="introduce">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting<br/>
            industry. Lorem Ipsum standard dummy text.
          </div>
          <div class="row"></div>
          <div class="me">
            <div class="left">
              <img src="@/assets/images/laobai.jpeg" alt=""/>
            </div>
            <div class="right">
              <p class="right_title">
                HELLO I Am <span>Kun Wang</span>
              </p>
              <p class="right_detail">
                本站使用
                <span style="color: #6f64e7">vue3</span> +
                <span style="color:#6f64e7">typescript</span>
                构建<br>
                我是一名本科学生，目前以前端为主，后端为辅<br>
                本站用于记录学习过程的笔记，以及技术方面的分享<br>
                可通过下面联系方式与我交流，微信同步
              </p>
              <div class="information">
                <div class="attribute">
                  <p>Phone Number</p>
                  <p>Email</p>
                </div>
                <div class="value">
                  <p>: 13115604410</p>
                  <p>: 910009136@qq.com</p>
                </div>
              </div>
              <div class="btn">Download Cv</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二部分 mash -->
      <div class="mash" id="mash">
        <div class="banner_background">
          <div class="show">
          </div>
        </div>
      </div>
      <!-- 第三部分 我的技能 -->
      <div class="mySkill" id="SKILL">
        <div class="box pageWidth">
          <div class="title">My <span>Skill</span></div>
          <div class="introduce">
            众所周知,哔哩哔哩是一所大学<br/>
            I learned a lot of techniques there
          </div>
          <div class="row"></div>
          <div class="mySkill_main">
            <div class="item" v-for="item in skill">
              <div class="item_icon">
                <img :src="item.imgPath" alt=""/>
              </div>
              <div class="item_title">{{ item.title }}</div>
              <div class="item_detail">
                <p>{{ item.shortDescription }}</p>
                <p>
                  {{ item.detailDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第四部分 日常生活 -->
      <div class="myLife" id="LIFE">
        <div class="box pageWidth">
          <div class="title">My <span>Daily Life</span></div>
          <div class="introduce">
            文能坐着敲一天代码,武能站着打一天篮球<br/>
            Thank you very much to my family, teachers and friends
          </div>
          <div class="row"></div>
          <div class="myLife_main">
            <div class="item">
              <img src="@/assets/images/life4.jpg" alt=""/>
              <div class="item_mash"></div>
            </div>

            <div class="item" id="life">
              <img src="@/assets/images/life2.jpg" alt=""/>
              <div class="item_mash"></div>
            </div>
            <div class="item">
              <img src="@/assets/images/life5.jpg" alt=""/>
              <div class="item_mash"></div>
            </div>
          </div>
          <div class="myLife_main">
            <div class="item item1">
              <img src="@/assets/images/life1.jpg" alt=""/>
              <div class="item_mash"></div>
            </div>
            <div class="item item1">
              <img src="@/assets/images/life3.jpg" alt=""/>
              <div class="item_mash"></div>
            </div>

            <div class="item item1">
              <img src="@/assets/images/life8.jpeg" alt=""/>
              <div class="item_mash"></div>
            </div>
          </div>
          <div class="myLife_more">查看更多</div>
        </div>
      </div>
      <!-- 第五部分 mash_two -->
      <div class="mash_two">
        <div class="banner_background">
          <div class="show"></div>
        </div>
      </div>
      <!-- 第六部分 我的最爱 -->
      <div class="myFavorite" id="FAVORITE">
        <div class="box pageWidth">
          <div class="title">My <span>Favorite</span></div>
          <div class="introduce">
            我最终的梦想，兰博基尼<br/>It kept pushing me forward
          </div>
          <div class="row"></div>
          <div class="myFavorite_main" ref="car" id="show">
            <div class="myFavorite_box">
              <div class="main_item main_item_one">
                <img src="@/assets/images/car7.jpg" alt=""/>
                <div class="words">
                  <p class="main_item_span">
                    <span>October 31, 2020</span> | Branding
                  </p>
                  <p class="main_item_title">
                    Beautiful Working
                  </p>
                  <p class="main_item_deetail">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipisicing elit. Enim
                    <br/>
                    eveniet incidunt quidem illum repellat
                    <br/>
                  </p>
                  <p class="main_item_more">Read More</p>
                </div>
              </div>
            </div>
            <div class="myFavorite_box">
              <div class="main_item main_item_two">
                <img src="@/assets/images/car2.jpeg" alt=""/>
                <div class="words">
                  <p class="main_item_span">
                    <span>October 31, 2020</span> | Branding
                  </p>
                  <p class="main_item_title">
                    Beautiful Working
                  </p>
                  <p class="main_item_deetail">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipisicing elit. Enim
                    <br/>
                    eveniet incidunt quidem illum repellat
                    <br/>
                  </p>
                  <p class="main_item_more">Read More</p>
                </div>
              </div>
            </div>
            <div class="myFavorite_box">
              <div class="main_item main_item_three">
                <img src="@/assets/images/sportsCar3.webp" alt=""/>
                <div class="words">
                  <p class="main_item_span">
                    <span>October 31, 2020</span> | Branding
                  </p>
                  <p class="main_item_title">
                    Beautiful Working
                  </p>
                  <p class="main_item_deetail">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipisicing elit. Enim
                    <br/>
                    eveniet incidunt quidem illum repellat
                    <br/>
                  </p>
                  <p class="main_item_more">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第七部分 联系我 -->
      <div class="contact">
        <div class="box pageWidth">
          <div class="title" id="CONTACT">
            CONTACT <span>US</span>
          </div>
          <div class="introduce">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting<br/>
            industry. Lorem Ipsum standard dummy text.
          </div>
          <div class="row"></div>
          <div class="contact_main">
            <form class="main_one">
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="email" placeholder="Email"/>
              <input type="text" name="subject" placeholder="Subject"/>
              <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              <input class="contact_submit" type="submit" value="Send Message"/>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue"
import Header from '@/view/components/Header.vue'
import ToTopAndNav from '@/view/components/ToTopAndNav.vue'

// 定义「我的技能」模块数据类型
type SkillType = {
  imgPath: string
  title: string
  shortDescription: string
  detailDescription: string
}
const skill: SkillType[] = [
  {
    imgPath: '/src/assets/images/htmlcss.png',
    title: 'HTML&CSS',
    shortDescription: 'Hypertext markup language',
    detailDescription: '超文本标记语言,通过预定义好的标签实现网页开发,是一种标记语言.'
  },
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    shortDescription: '常作为开发Web页面的编程语言',
    detailDescription: '是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言.'
  },
  {
    imgPath: '/src/assets/images/less.png',
    title: 'Less',
    shortDescription: 'css 预编译器',
    detailDescription: '可以扩展 css语言,添加功能,比如变量、混合、函数和许多其他的技术.'
  },
  {
    imgPath: '/src/assets/images/Vue.png',
    title: 'Vue',
    shortDescription: '渐进式 JavaScript 框架',
    detailDescription: '声明式地将DOM 绑定至底层Vue实例的数据.'
  },
  {
    imgPath: '/src/assets/images/node.svg',
    title: 'Node.js',
    shortDescription: 'JavaScirpt 运行环境',
    detailDescription: ' 是一个开源和跨平台的 JavaScript 运行时环境,几乎是任何类型项目的流行工具.'
  },
  {
    imgPath: '/src/assets/images/typescript.png',
    title: 'TypeScript',
    shortDescription: 'JavaScript类型的超集',
    detailDescription: '为 JavaScript 带来了强大的类型系统和对ES2015的支持.'
  }

]

// sportCar淡出效果
const carFadeOut = () => {
  // 获取sportsCar相关元素
  const myFavorite_item = document.querySelectorAll('.main_item')
  const showCar = document.querySelector('#show') as HTMLElement
  document.addEventListener('scroll', () => {
    // sportsCar淡出效果
    let itemTop = showCar.offsetTop
    if (window.scrollY + window.innerHeight >= itemTop) {
      myFavorite_item.forEach((item) => {
        item.classList.add('fade')
      })
    }
  })

}

onMounted(() => {
  // sportCar滑出效果
  carFadeOut()
})
</script>

<style lang="scss" scoped>
.about-container {
  .header {
    position: relative;
    width: 100%;
    height: 800px;
    // margin-bottom: 166px;
    box-sizing: border-box;

    .nav-font {
      font-family: Comic Sans MS, Helvetica Neue, Microsoft Yahei, -apple-system, sans-serif !important;
    }

    .box {
      .header_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        word-spacing: normal;
        color: rgb(141, 144, 149);
        font-family: Helvetica, Arial, Verdana, sans-serif;
        font-style: normal;
        font-weight: normal;

        .left {
          img {
            width: 60px;
            height: 60px;
          }
        }

        .right {
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            color: #fff;
          }

          .nav_item {
            margin-left: 40px;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            cursor: pointer;
          }

          .nav_item:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }

      .header_main {
        margin-top: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .one {
          color: #fff;
          font-size: 15px;
        }

        .two {
          margin-top: 80px;
          color: #fff;
          font-size: 40px;

          span {
            font-size: 70px;
            color: red;
          }
        }

        img {
          margin-top: 23px;
        }
      }
    }

    .mash {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }

    .swiper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //height: 600px;
      z-index: -2;

      .swiper-button-prev {
        z-index: 10;
      }

      img {
        width: 100%;
        //height: 100%;
      }
    }


  }

  // main 部分
  .main {
    //margin-top: 200px;
    // 主题第一部分 个人简介
    .personal {
      padding-bottom: 100px;
      padding-top: 100px;
      background-color: #1d293e;
      width: 100%;
      color: #fff;

      .title {
        text-align: center;
        font-size: 40px;

        span {
          color: #6f64e7;
        }
      }

      .introduce {
        text-align: center;
        margin-top: 30px;
        font-size: 14px;
      }

      .row {
        width: 80px;
        border-bottom: 2px solid #6f64e7;
        margin: 40px auto;
      }

      .me {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 80px;
        letter-spacing: 1px;

        .left {
          img {
            width: 500px;
            height: auto;
            border-radius: 9px;
          }
        }

        .right {
          margin-left: 70px;

          .right_title {
            font-weight: 900;
            font-size: 40px;
            line-height: 90px;

            span {
              color: #6f64e7;
            }
          }

          .right_detail {
            font-size: 20px;
            line-height: 40px;
            margin-bottom: 30px;
            letter-spacing: 0.4px;
          }

          .information {
            padding-bottom: 50px;
            display: flex;

            .attribute {
              width: 200px;
              line-height: 50px;
              font-size: 15px;
            }

            .value {
              width: 300px;
              line-height: 50px;
              font-size: 15px;
            }
          }

          .btn {
            // margin-left: 30px;
            width: 150px;
            height: 60px;
            border-radius: 10px;
            text-align: center;
            line-height: 60px;
            background-color: #6f64e7;
            transition: all 0.5s ease-in-out;
            cursor: pointer;
          }

          .btn:hover {
            background-color: #000;
          }
        }
      }
    }

    // 第二部分 mash
    .mash {
      width: 100%;
      // height: 250px;
      .banner_background {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/wanju1.jpg) no-repeat fixed;
        background-size: 100% 100%;

        .show {
          width: 100%;
          height: 250px;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    // 第三部分 技能
    .mySkill {
      // margin-top: 100px;
      padding-top: 100px;
      padding-bottom: 50px;
      width: 100%;
      color: #fff;
      background-color: #1d293e;

      .box {
        .title {
          text-align: center;
          font-size: 40px;

          span {
            color: #6f64e7;
          }
        }

        .introduce {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
        }

        .row {
          width: 80px;
          border-bottom: 2px solid #6f64e7;
          margin: 40px auto;
        }

        .mySkill_main {
          margin-top: -40px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .item {
            box-sizing: border-box;
            padding: 40px 17px 0;
            margin-top: 40px;
            width: 380px;
            height: 300px;
            background-color: #1d293e;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.5s ease-in-out;
            cursor: pointer;
            box-shadow: 0 0 10px 2px #1b2f88;

            .item_icon {
              width: 60px;
              height: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #1d293e;
              box-shadow: 0 0 10px 2px #1b2f88;

              img {
                margin: calc(50% - 25px) calc(50% - 25px);
                width: 50px;
                height: auto;
              }
            }

            .item_title {
              margin-top: 10px;
              color: #fff;
              // color: ;
              font-size: 30px;
              font-weight: 500;
              transition: all 0.5s ease-in-out;
            }

            .item_detail {
              overflow: hidden;
              margin-top: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              font-size: 15px;
              line-height: 30px;
            }
          }

          .item:hover {
            margin-top: 30px;
          }

          .item:hover .item_title {
            color: #6f64e7;
          }
        }
      }
    }

    // 第四部分  日常生活
    .myLife {
      padding-bottom: 100px;
      padding-top: 100px;
      width: 100%;
      color: black;
      background-color: #ffffff;

      .box {
        .title {
          text-align: center;
          font-size: 40px;

          span {
            color: #6f64e7;
          }
        }

        .introduce {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
        }

        .row {
          width: 80px;
          border-bottom: 2px solid #6f64e7;
          margin: 40px auto;
        }

        .myLife_main {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          height: 320px;

          #life {
            height: 289px;
          }

          .item {
            position: relative;
            box-sizing: border-box;
            margin-top: 30px;
            background-color: #fff;
            height: 247px;
            padding: 8px;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            cursor: pointer;

            img {
              border-radius: 4px;
              width: 380px;
              height: auto;
              transition: all 0.5s;
            }
          }

          .item1 {
            height: 325px;
          }

          .item:hover {
            margin-top: 10px;
            box-shadow: 0 0 10px 10px #d2d1d1;
          }
        }

        .myLife_more {
          margin-top: 100px;
          margin-left: calc(50% - 50px);
          width: 180px;
          height: 60px;
          background-color: #6f64e7;
          color: #fff;
          font-size: 20px;
          line-height: 60px;
          border-radius: 10px;
          text-align: center;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }

        .myLife_more:hover {
          background-color: #000;
        }
      }
    }

    // 第五部分 mash
    .mash_two {
      width: 100%;
      height: 290px;

      .banner_background {
        width: 100%;
        height: 100%;
        background: url(@/assets/images/basketball.jpg) no-repeat fixed;
        background-size: cover;

        .show {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }

    // 第六部分 最喜欢
    .myFavorite {
      box-sizing: border-box;
      padding-top: 100px;
      padding-bottom: 50px;
      width: 100%;
      color: #fff;
      height: 800px;
      background-color: #1d293e;

      .box {
        .title {
          text-align: center;
          font-size: 40px;

          span {
            color: #6f64e7;
          }
        }

        .introduce {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
        }

        .row {
          width: 80px;
          border-bottom: 2px solid #6f64e7;
          margin: 40px auto;
        }

        .myFavorite_main {
          display: flex;
          justify-content: space-between;

          .myFavorite_box {
            position: relative;
            width: 380px;
            // overflow: hidden;
            .main_item {
              position: absolute;
              display: flex;
              flex-direction: column;

              img {
                width: 380px;
                height: 237px;
                border-radius: 4px;
                cursor: pointer;
              }

              .words {
                color: #fff;
                padding: 20px 30px;

                .main_item_span {
                  padding-bottom: 12px;
                  font-size: 12px;

                  span {
                    color: #7564e5;
                  }
                }

                .main_item_title {
                  font-size: 26px;
                  cursor: pointer;
                  transition: all 0.3s ease-in-out;
                }

                .main_item_deetail {
                  margin: 10px 0;
                  color: rgb(232, 225, 225);
                  cursor: pointer;
                }

                .main_item_more {
                  transition: all 0.3s ease-in-out;
                  font-size: 16px;
                  cursor: pointer;
                }

                .main_item_title:hover {
                  color: #7564e5;
                }

                .main_item_more:hover {
                  color: #7564e5;
                }
              }
            }

            .main_item_one {
              opacity: 0;
              left: -120px;
              transition: all 0.2s ease-in-out;
            }

            .main_item_two {
              opacity: 0;
              top: 100px;
              transition: all 0.2s ease-in-out;
            }

            .main_item_three {
              opacity: 0;
              left: 120px;
              transition: all 0.2s ease-in-out;
            }

            .fade {
              opacity: 1;
              left: 0;
              top: 0;
              transition: all 1.4s ease-in-out;
            }
          }
        }
      }
    }

    // 第七部分 联系我
    .contact {
      padding: 100px 0 10px;
      width: 100%;
      color: #fff;
      background-color: #1d293e;

      .box {
        .title {
          text-align: center;
          font-size: 40px;

          span {
            color: #6f64e7;
          }
        }

        .introduce {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
        }

        .row {
          width: 80px;
          border-bottom: 2px solid #6f64e7;
          margin: 40px auto;
        }

        .contact_main {
          .main_one {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            input {
              box-sizing: border-box;
              width: 380px;
              height: 40px;
              background-color: #1d293e;
              border: 1px solid #384967;
              padding-left: 10px;
              color: #666;
              outline: none;
              transition: all 0.3s ease-in-out;
            }

            input:focus {
              border: 1px solid #6f64e7;
              color: #fff;
            }

            textarea {
              margin-top: 50px;
              box-sizing: border-box;
              background-color: #1d293e;
              border: 1px solid #384967;
              width: 100%;
              height: 180px;
              resize: none;
              color: #666;
              font-size: 15px;
              font-weight: 500;
              padding: 10px;
              outline: none;
              transition: all 0.3s ease-in-out;
            }

            textarea:focus {
              border: 1px solid #6f64e7;
              color: #fff;
            }

            .contact_submit {
              width: 180px;
              height: 60px;
              background-color: #6f64e7;
              margin: 40px auto;
              border-radius: 8px;
              color: #fff;
              font-size: 16px;
              line-height: 60px;
              text-align: center;
              cursor: pointer;
              transition: all 0.5s ease-in-out;
            }

            .contact_submit:hover {
              background-color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
