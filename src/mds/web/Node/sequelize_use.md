# 变更字段名
```text
 fds: [...this.normalFields,
        [SeqFn.literal('branch'), 'title'],
        [SeqFn.literal('branch'), 'label']
      ],
```

# select语法扩展
```text
szo[this.table].findOne({
      attributes: [[
        SeqFn.literal('count(*)'), 'n_count'
      ]],
      where: cond,
})
```
```text
const prCountFakeCode = szo.t_href_log.findOne({
      attributes: [
            [SeqFn.literal('count(distinct fake_code)'), 'cc']
          ],
        where: cond
});
```

# concat语法扩展
```text
fds: [...this.normalFields,
        [SeqFn.literal('concat_ws("-",id,acct_name,card_no,bank_name,acct_type)'), 'title'],
  ],
```
```text
const attrList = [
        'create_at', 'q_title','proj_subid',
        [SeqFn.literal('concat(\'https://www.zhihu.com/question/\',qid)'), 'qid_url'],
        'excerpt',
        'answer_url', 'kid_name',
        [SeqFn.literal('concat(\'https://www.zhihu.com/people/\',kid_url_token)'), 'kid_url'],
        'n_voteup',
        'a_create_at', 'a_update_at', 'a_rank_id'
    ];
```

# 多条件合并
```text
cond: {
    fee_id: ino.fee_id,
    is_remove: 0,
    reim_selfno: {
      $like: 'RM%'
    },
    $and: [
      SeqFn.literal(`date_format(fee_at,'%Y') = '${ino.year_dst}'`)
    ]
  },
```

# 日期
```text
where: {
  email: ino.email,
  create_at: {
    $gte: SeqFn.fn(
      'date_add',
      SeqFn.literal('now()'),
      SeqFn.literal('interval -30 day')
    ),
  },
},
```

# 加减计算
```text
return this.updateBase({
      ...ino,
      cond: {},
      targets: {
        seqno: SeqFn.literal('seqno+1')
      },
      fish: ino.fish,
      table: 't_cs_seqno'
})
```
```text
attributes: [
    [SeqFn.fn('date_format', SeqFn.col('create_at'), '%m%d'), 'ddtime'],
]
```

# group by
```text
const rtn = await szo.t_word_main.findAll({
                attributes: [
                    [SeqFn.fn('date_format', SeqFn.col('create_at'), '%m%d'), 'ddtime'],
                    ['word', 'obs_brand'],
                    // [SeqFn.fn('count', SeqFn.col('*')),'n_appear_content'],
                    // [SeqFn.literal('round(count(*)*100/50,1)'),'pct_appear_content'],
                    // [SeqFn.literal('sum(if(n_brand_appear>0,n_brand_appear,0))'),'n_appear_amount']

                    [SeqFn.literal('sum(if(n_brand_appear>0,1,0))'), 'n_appear_content'],
                    [SeqFn.literal('count(*)'), 'n_count'],
                    [SeqFn.literal('sum(if(n_brand_appear>0,1,0))/count(*)'), 'pct_appear_content'],
                    [SeqFn.literal('sum(if(n_brand_appear>0,n_brand_appear,0))'), 'n_appear_amount']
                ],
                where: {
                    word: ino.word
                },
                group: SeqFn.fn('date_format', SeqFn.col('create_at'), '%m-%d')
            })
```

# between
```text
const dr = ['2023-01-01','2023-02-28']
mcond['create_at']={ $between:dr }
```
