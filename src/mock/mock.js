import Mock from 'mockjs'
let baseURL = ''
//首页新闻公告和系统公告
Mock.mock(baseURL+'/getMovie', () => {
  const obj = {
    "code": 1000,
    "msg": "ok",
    "data": {
      "notice": [//系统公告列表
        {
          "id": null,
          "content": null,
          "createuser": null,
          "createtime": null,
          "href": null,
          "contentstatus": null,
          "announcement_type": null,
          "isdeleted": null,
          "username": null,
          "news_id": null,
          "title": "aaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbb",//标题
          "subject_id": 47,//课题ID
          "titlestatus": "[已打赏]"//标题状态
        },
        {
          "id": null,
          "content": null,
          "createuser": null,
          "createtime": null,
          "href": null,
          "contentstatus": null,
          "announcement_type": null,
          "isdeleted": null,
          "username": null,
          "news_id": null,
          "title": "aaabbb",
          "subject_id": 47,
          "titlestatus": "[已打赏]"
        }
      ],
      "news": [//新闻公告列表
        {
          "id": null,
          "content": null,
          "createuser": null,
          "createtime": null,
          "href": null,
          "contentstatus": null,
          "announcement_type": null,
          "isdeleted": null,
          "username": null,
          "news_id": 329,//新闻公告id
          "title": "详情*新闻详情*详情*新闻详情*456",//标题
          "subject_id": null,
          "titlestatus": null
        },
        {
          "id": null,
          "content": null,
          "createuser": null,
          "createtime": null,
          "href": null,
          "contentstatus": null,
          "announcement_type": null,
          "isdeleted": null,
          "username": null,
          "news_id": 328,
          "title": "中国金茂创新云平台内部公测开始了！",
          "subject_id": null,
          "titlestatus": null
        }
      ]
    }
  };
  return obj;
});


export default Mock;
