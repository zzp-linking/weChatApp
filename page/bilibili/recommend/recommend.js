var app = getApp();

Page({
  data:{
    // text:"这是一个页面"
    "user_face":app.user_face,
    "user_name":app.user_name,
    "is_scroll-y":true,
    live_siwpers:[{"imgpath":"/static/image/recommend_swiper/c89d65cb9c56d819c688464e712a38bb6e3dc3ac.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/785a892778b941f276a2208b68541be852445382.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/889c27bab8f2e2f7d412de9c8665fd9e48512f2f.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/89034a38a9415654004ecf66d6455cca8513830d.jpg","url":"www.bilibili.com"},
                    {"imgpath":"/static/image/recommend_swiper/09c7f6f70de45e477ecdfc08b40cda77536ef996.jpg","url":"www.bilibili.com"}],
    indicatorDots: true,  
    vertical:false,
    autoplay:true, 
    siwper_interval:5000,
    siwper_duration:1000,
    recommend_lives01:[{"imgpath":"/static/image/live/a33849b2148ad4cdb8694bd224d5a7e59678b057.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"生活娱乐","title":"老司机开车啦,刷卡上车","user_name":"小天不是受QAQ","audience":"1.2万"},
                      {"imgpath":"/static/image/live/0a80ff42169ec61c709bed2e8233684ae5726ae6.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"生活娱乐", "title":"一人饮酒醉【喊麦？！古风来啦】啦啦啦啦啦啦","user_name":"啾啾❤安安","audience":"1.1万"},
                      {"imgpath":"/static/image/live/oYYBAFbeVCaARU-1AACu6XEofds765.jpg","url":"http://www.bilibili.com",
                      "type":"御宅文化", "title":"上课好困","user_name":"核弹阿茶","audience":"1.8万"},
                      {"imgpath":"/static/image/live/d80698ce077109c89044b67fd9a4f12fb9cba6c1.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"放映厅","title":"耳机福利，ASMP的花的录播ya","user_name":"0o媚儿o0","audience":"2.2万"},],
    recommend_lives02:[{"imgpath":"/static/image/live/9547cbe3d7ec2b5b4c832f9b0c68677b2e95d434.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"手游直播","title":"崩坏3日常咸鱼交流，爆肝中","userName":"千狩","audience":"454"},
                      {"imgpath":"/static/image/live/61580119de2839f92ed71deaf4fb4ae5c40c9144.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"生活娱乐", "title":"姚明来了！做客台湾科技大学与两岸学生交流","userName":"看看新闻SMG","audience":"5719"},
                      {"imgpath":"/static/image/live/b020de5a95ec3f02e5f5a76dd153f24eed6c00d4.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"御宅文化", "title":"33在这里~感冒了2333333333","userName":"米糯喵酱SAMAa","audience":"1410"},
                      {"imgpath":"/static/image/live/d80698ce077109c89044b67fd9a4f12fb9cba6c1.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"网络游戏","title":"关注微博抽守望先锋典藏版！","userName":"叶无力","audience":"2842"},
                      {"imgpath":"/static/image/live/e548d02413f66bab12dac1731f1944cf.jpg","url":"http://www.bilibili.com",
                      "type":"电子竞技","title":"现在播放的是超级保镖","userName":"赣榆十三太保","audience":"17"},
                      {"imgpath":"/static/image/live/f32972c67b6317d003a15079f92efc9d084f2fe1.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "type":"手游直播","title":"卡手机玩崩坏3（关注一下呗）","userName":"その人の有毒","audience":"0.2万"}],
    office_recommend:{"imgpath":"/static/image/6029764557e3cbe91475faae26e6e244de8c1d3c.jpg","url":"http://www.bilibili.com",
                      "type":"放映厅","title":"【官方】哔哩哔哩官方音乐台","userName":"哔哩哔哩音乐台","audience":"2.1万"},
    paint_plates:[{"imgpath":"/static/image/live/87e003d145b908ea31ce93d6a190e1cd8599595f.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"使命召唤OL漫画第二话ING","userName":"麻辣图图","audience":"0.1万"},
                      {"imgpath":"/static/image/live/oYYBAFbQJEuAdiIcAADFjDo4fc8827.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"今晚画作业","userName":"丹艾凡","audience":"1.7万"},
                      {"imgpath":"/static/image/live/f4a0c0f3dd4fb2b3b69b250e6ecca508f8671d10.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"宫卫=。=","userName":"暗雪喜欢晚上不睡觉","audience":"0.5万"},
                      {"imgpath":"/static/image/live/973c57ba2227cb0fcbd24266ee8e3edaeb81fe5f.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"巨乳研究中心群582877192","userName":"非非有","audience":"0.6万"}],
    mobile_plants:[{"imgpath":"/static/image/live/c1ff1bf394efc339969350e225267c8ec520fc81.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"剪辑狗的汪汪汪","userName":"Fionana碎碎念","audience":"0.1万"},
                      {"imgpath":"/static/image/live/bf724d1e70d08db91480a356b9704365d46736a3.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"东京留学生，手写弹幕。","userName":"hikariia","audience":"1.7万"},
                      {"imgpath":"/static/image/live/f2e7c9f0c18b5fa503c0210653289d0ab35fb3d1.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"好无聊啊","userName":"污桃是污污","audience":"0.5万"},
                      {"imgpath":"/static/image/live/f277b9adacd0b821494077245d292a3b98491590.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"晚上才唱歌啦~\(≧▽≦)/~","userName":"橙子酱wy","audience":"0.6万"}],
    dance_plants:[{"imgpath":"/static/image/live/5f761e61f55f4e209aa52ddcf81c04e3fd9132d5.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"萝莉幼女音：不化妆的女主播略丑莫怪0.0","watches":"2654","audience":"1352"},
                      {"imgpath":"/static/image/live/8b1e3dbffd94e3a41f7519992768249e6fcc1d15.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"【声控福利】听歌 聊天 交朋友","watches":"7574","audience":"1201"},
                      {"imgpath":"/static/image/live/56d71b5651c44958567fd8a9086a89f52b7042ba.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"萝莉音幼齿萌音小清新声控实力日翻养基厂","watches":"5785","audience":"215"},
                      {"imgpath":"/static/image/live/6681423a6d731fc7920c583fa9547bc52cffab12.jpg_160x100.jpg","url":"http://www.bilibili.com",
                      "title":"【声控福利】少萝音妹子唱歌","watches":"4785","audience":"122"}],
    mobile_game_plants:[{"imgpath":"/static/image/live/ca8bf343cd5d52999920fe7ac1e56999cb74e737.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"第一露娜 上课直播ing","userName":"陈旧君","audience":"1905"},
                      {"imgpath":"/static/image/live/c869945dfdad179772f052a73be04da5.jpg","url":"http://www.bilibili.com",
                     "title":"翻车少女果的日常","userName":"晴天果","audience":"81"},
                      {"imgpath":"/static/image/live/f58c2c8fcb222506430bbac1ce6061280af3d2ba.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"小枫终于王者了了，呜呜呜","userName":"月夜枫静","audience":"1426"},
                      {"imgpath":"/static/image/live/ff793bfd5e13d00de0db8872a7e770530ff39754.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"召唤师峡谷一日游","userName":"酒曲最帅啦","audience":"1244"}],
    pc_game_plants:[{"imgpath":"/static/image/live/a889f6d7c9dbe00207d43532905f3ffaa0bc2586.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"拿着火柴烤油缸","userName":"不明真相的的LD","audience":"17"},
                      {"imgpath":"/static/image/live/a641693a33864c7b1e8ff363759a67e7cd5c2576.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"【子轩】CF最高画质","userName":"子轩咯咯","audience":"581"},
                      {"imgpath":"/static/image/live/5706457852c1f6330e3843c60be8c31158bcf65c.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"【nico】感冒了感冒了QAQ","userName":"Nico噗噗噗","audience":"1402"},
                      {"imgpath":"/static/image/live/b551cebea786ae475097f51adb87040ea39473e5.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"杀鸡：我就是邪神萝莉的百合对象","userName":"用裴的碰瓷","audience":"82"}], 
    net_game_plants:[{"imgpath":"/static/image/live/2c891930cac1927ffe34bfd5d69d9cc7339bd1f4.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"『仓鱼』就是如此咸鱼（未知中的咸鱼）","userName":"雪湮丶","audience":"10"},
                      {"imgpath":"/static/image/live/6a6f286740eb348a9a30ef284bdd41a42687de50.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"社畜划水翘班地","userName":"薯条酱","audience":"13"},
                      {"imgpath":"/static/image/live/10b7450744c1ed0a6a51b163ed8ba5aa268a8606.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"LOL大师玩300第33日","userName":"超威の葛炮","audience":"2664"},
                      {"imgpath":"/static/image/live/fabf3e2f95210acbb4be7b4d094d66f609177350.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"英雄联盟方毒品了有喜欢的加关注哦","userName":"璎珞か扩散中","audience":"82"}],  
    otaku_plants:[{"imgpath":"/static/image/live/c5968731b405e1f0b8919d2842fa94f32ee2e9fe.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"【橘砸】2333","userName":"语酱Poi","audience":"908"},
                      {"imgpath":"/static/image/live/ef6719d194d37efea4379f799d7e0f5b533172f5.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"刚睡醒，起来骚一会~霸道总裁萌脸攻音","userName":"哔哩老攻","audience":"2712"},
                      {"imgpath":"/static/image/live/4fe83c29c3826c293c99c9a87e86efc3b595b213.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"自制手办-依旧虐","userName":"姐夫这次当主播","audience":"175"},
                      {"imgpath":"/static/image/live/9f9c0f093d0f836ee3c79fe23d0083c49281edca.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"程序猴子的日常-白天挂机-晚上滑稽","userName":"羞涩の秀吉","audience":"22"}],  
    video_hall_plants:[{"imgpath":"/static/image/live/1f296879e0e345da68bb95f2ce79f05817baf8ed.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"奇葩说 撕逼大战 还有火星情报局哦","watches":"1565","audience":"783"},
                      {"imgpath":"/static/image/live/2637d7428d4428026fd00723f1ba41419469f18e.jpg_320x200.jpg","url":"http://www.bilibili.com",
                     "title":"有毒的日音直播间~进来可就出不去了~喵","watches":"2623","audience":"1.4万"},
                      {"imgpath":"/static/image/live/b747e4b89cc9fb33ed8326ab5a9f769ca287424f.png_320x200.png","url":"http://www.bilibili.com",
                     "title":"【老公TV】周星驰 一生所爱 喜剧之王","watches":"2354","audience":"5032"},
                      {"imgpath":"/static/image/live/eaba5ac0162d65c049e326e92fc0064896428c62.jpg_320x200.jpg","url":"http://www.bilibili.com",
                      "title":"摩登家庭 S08F03（半季插播）全天放送","watches":"1324","audience":"678"}], 
    live_recommend_data:{"title":"推荐主播","number":"2005"},
    drama_title:{"url":"www.bilibili.com","title":"番剧推荐"},
    cartoon_title:{"url":"www.bilibili.com","title":"动画区"},
    music_title:{"url":"www.bilibili.com","title":"音乐区"},
    topic_one_title:{"url":"www.bilibili.com","title":"话题"},
    dance_title:{"url":"www.bilibili.com","title":"舞蹈区"},
    game_title:{"url":"www.bilibili.com","title":"游戏区"},
    guichu_title:{"url":"www.bilibili.com","title":"鬼畜区"},
    technology_title:{"url":"www.bilibili.com","title":"科技区"},
    life_title:{"url":"www.bilibili.com","title":"生活区"},
    fashion_plant:{"url":"www.bilibili.com","title":"时尚区"},
    advertisement_title:{"url":"www.bilibili.com","title":"广告区"},
    entertainment_title:{"url":"www.bilibili.com","title":"娱乐区"},
    television_title:{"url":"www.bilibili.com","title":"电视剧区"},
    movie_title:{"url":"www.bilibili.com","title":"电影区"},      
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})