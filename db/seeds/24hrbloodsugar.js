
exports.seed = function(knex) {
  return knex('bloodsugar').del()
    .then(function () {
      return knex('bloodsugar').insert([
        {"id":1,"timestamp":"2019-02-01T04:48:48Z","value":111,"user_id":1},
        {"id":2,"timestamp":"2019-02-01T01:14:05Z","value":110,"user_id":1},
        {"id":3,"timestamp":"2019-02-01T00:35:04Z","value":124,"user_id":1},
        {"id":4,"timestamp":"2019-02-01T03:30:18Z","value":111,"user_id":1},
        {"id":5,"timestamp":"2019-02-01T03:12:07Z","value":109,"user_id":1},
        {"id":6,"timestamp":"2019-02-01T08:26:07Z","value":100,"user_id":1},
        {"id":7,"timestamp":"2019-02-01T04:20:51Z","value":119,"user_id":1},
        {"id":8,"timestamp":"2019-02-01T03:18:58Z","value":125,"user_id":1},
        {"id":9,"timestamp":"2019-02-01T03:34:32Z","value":122,"user_id":1},
        {"id":10,"timestamp":"2019-02-01T07:23:21Z","value":125,"user_id":1},
        {"id":11,"timestamp":"2019-02-01T03:22:46Z","value":107,"user_id":1},
        {"id":12,"timestamp":"2019-02-01T03:10:38Z","value":123,"user_id":1},
        {"id":13,"timestamp":"2019-02-01T00:55:29Z","value":108,"user_id":1},
        {"id":14,"timestamp":"2019-02-01T07:38:13Z","value":105,"user_id":1},
        {"id":15,"timestamp":"2019-02-01T00:01:44Z","value":108,"user_id":1},
        {"id":16,"timestamp":"2019-02-01T11:21:36Z","value":101,"user_id":1},
        {"id":17,"timestamp":"2019-02-01T07:55:03Z","value":124,"user_id":1},
        {"id":18,"timestamp":"2019-02-01T04:40:31Z","value":116,"user_id":1},
        {"id":19,"timestamp":"2019-02-01T03:03:21Z","value":116,"user_id":1},
        {"id":20,"timestamp":"2019-02-01T06:17:58Z","value":116,"user_id":1},
        {"id":21,"timestamp":"2019-02-01T04:20:45Z","value":111,"user_id":1},
        {"id":22,"timestamp":"2019-02-01T00:57:00Z","value":103,"user_id":1},
        {"id":23,"timestamp":"2019-02-01T10:56:43Z","value":107,"user_id":1},
        {"id":24,"timestamp":"2019-02-01T01:08:38Z","value":105,"user_id":1},
        {"id":25,"timestamp":"2019-02-01T03:18:52Z","value":103,"user_id":1},
        {"id":26,"timestamp":"2019-02-01T01:35:20Z","value":123,"user_id":1},
        {"id":27,"timestamp":"2019-02-01T05:56:51Z","value":104,"user_id":1},
        {"id":28,"timestamp":"2019-02-01T02:12:38Z","value":121,"user_id":1},
        {"id":29,"timestamp":"2019-02-01T09:27:59Z","value":113,"user_id":1},
        {"id":30,"timestamp":"2019-02-01T07:38:49Z","value":118,"user_id":1},
        {"id":31,"timestamp":"2019-02-01T11:20:41Z","value":124,"user_id":1},
        {"id":32,"timestamp":"2019-02-01T05:28:30Z","value":120,"user_id":1},
        {"id":33,"timestamp":"2019-02-01T07:24:27Z","value":112,"user_id":1},
        {"id":34,"timestamp":"2019-02-01T01:50:50Z","value":111,"user_id":1},
        {"id":35,"timestamp":"2019-02-01T06:43:19Z","value":104,"user_id":1},
        {"id":36,"timestamp":"2019-02-01T01:44:05Z","value":112,"user_id":1},
        {"id":37,"timestamp":"2019-02-01T07:18:07Z","value":108,"user_id":1},
        {"id":38,"timestamp":"2019-02-01T06:22:20Z","value":100,"user_id":1},
        {"id":39,"timestamp":"2019-02-01T03:53:03Z","value":125,"user_id":1},
        {"id":40,"timestamp":"2019-02-01T10:32:50Z","value":116,"user_id":1},
        {"id":41,"timestamp":"2019-02-01T00:40:15Z","value":104,"user_id":1},
        {"id":42,"timestamp":"2019-02-01T00:05:13Z","value":119,"user_id":1},
        {"id":43,"timestamp":"2019-02-01T09:20:01Z","value":115,"user_id":1},
        {"id":44,"timestamp":"2019-02-01T00:23:43Z","value":101,"user_id":1},
        {"id":45,"timestamp":"2019-02-01T03:16:28Z","value":125,"user_id":1},
        {"id":46,"timestamp":"2019-02-01T09:49:18Z","value":124,"user_id":1},
        {"id":47,"timestamp":"2019-02-01T00:27:15Z","value":122,"user_id":1},
        {"id":48,"timestamp":"2019-02-01T09:59:52Z","value":114,"user_id":1},
        {"id":49,"timestamp":"2019-02-01T10:36:10Z","value":104,"user_id":1},
        {"id":50,"timestamp":"2019-02-01T09:45:03Z","value":107,"user_id":1},
        {"id":51,"timestamp":"2019-02-01T01:19:14Z","value":108,"user_id":1},
        {"id":52,"timestamp":"2019-02-01T05:05:53Z","value":113,"user_id":1},
        {"id":53,"timestamp":"2019-02-01T00:39:37Z","value":118,"user_id":1},
        {"id":54,"timestamp":"2019-02-01T04:27:52Z","value":102,"user_id":1},
        {"id":55,"timestamp":"2019-02-01T10:46:05Z","value":108,"user_id":1},
        {"id":56,"timestamp":"2019-02-01T00:08:50Z","value":119,"user_id":1},
        {"id":57,"timestamp":"2019-02-01T05:25:18Z","value":122,"user_id":1},
        {"id":58,"timestamp":"2019-02-01T02:23:15Z","value":116,"user_id":1},
        {"id":59,"timestamp":"2019-02-01T02:06:16Z","value":122,"user_id":1},
        {"id":60,"timestamp":"2019-02-01T08:44:50Z","value":115,"user_id":1},
        {"id":61,"timestamp":"2019-02-01T11:17:23Z","value":110,"user_id":1},
        {"id":62,"timestamp":"2019-02-01T02:02:23Z","value":119,"user_id":1},
        {"id":63,"timestamp":"2019-02-01T06:57:19Z","value":119,"user_id":1},
        {"id":64,"timestamp":"2019-02-01T06:47:02Z","value":124,"user_id":1},
        {"id":65,"timestamp":"2019-02-01T00:53:13Z","value":103,"user_id":1},
        {"id":66,"timestamp":"2019-02-01T10:16:00Z","value":125,"user_id":1},
        {"id":67,"timestamp":"2019-02-01T10:10:39Z","value":120,"user_id":1},
        {"id":68,"timestamp":"2019-02-01T07:24:29Z","value":100,"user_id":1},
        {"id":69,"timestamp":"2019-02-01T06:50:40Z","value":103,"user_id":1},
        {"id":70,"timestamp":"2019-02-01T02:24:46Z","value":117,"user_id":1},
        {"id":71,"timestamp":"2019-02-01T00:35:56Z","value":122,"user_id":1},
        {"id":72,"timestamp":"2019-02-01T04:46:15Z","value":110,"user_id":1},
        {"id":73,"timestamp":"2019-02-01T10:18:27Z","value":117,"user_id":1},
        {"id":74,"timestamp":"2019-02-01T02:55:32Z","value":124,"user_id":1},
        {"id":75,"timestamp":"2019-02-01T07:28:07Z","value":106,"user_id":1},
        {"id":76,"timestamp":"2019-02-01T00:49:30Z","value":118,"user_id":1},
        {"id":77,"timestamp":"2019-02-01T07:52:55Z","value":107,"user_id":1},
        {"id":78,"timestamp":"2019-02-01T09:58:42Z","value":118,"user_id":1},
        {"id":79,"timestamp":"2019-02-01T02:05:24Z","value":101,"user_id":1},
        {"id":80,"timestamp":"2019-02-01T00:25:33Z","value":121,"user_id":1},
        {"id":81,"timestamp":"2019-02-01T00:52:34Z","value":119,"user_id":1},
        {"id":82,"timestamp":"2019-02-01T02:13:53Z","value":116,"user_id":1},
        {"id":83,"timestamp":"2019-02-01T05:19:57Z","value":114,"user_id":1},
        {"id":84,"timestamp":"2019-02-01T06:25:40Z","value":100,"user_id":1},
        {"id":85,"timestamp":"2019-02-01T01:23:56Z","value":115,"user_id":1},
        {"id":86,"timestamp":"2019-02-01T09:13:31Z","value":113,"user_id":1},
        {"id":87,"timestamp":"2019-02-01T04:04:15Z","value":100,"user_id":1},
        {"id":88,"timestamp":"2019-02-01T05:57:34Z","value":102,"user_id":1},
        {"id":89,"timestamp":"2019-02-01T09:47:44Z","value":114,"user_id":1},
        {"id":90,"timestamp":"2019-02-01T04:40:51Z","value":105,"user_id":1},
        {"id":91,"timestamp":"2019-02-01T03:26:22Z","value":103,"user_id":1},
        {"id":92,"timestamp":"2019-02-01T05:15:59Z","value":112,"user_id":1},
        {"id":93,"timestamp":"2019-02-01T10:00:34Z","value":102,"user_id":1},
        {"id":94,"timestamp":"2019-02-01T01:58:02Z","value":115,"user_id":1},
        {"id":95,"timestamp":"2019-02-01T10:31:20Z","value":124,"user_id":1},
        {"id":96,"timestamp":"2019-02-01T07:45:09Z","value":121,"user_id":1},
        {"id":97,"timestamp":"2019-02-01T07:37:47Z","value":109,"user_id":1},
        {"id":98,"timestamp":"2019-02-01T05:51:58Z","value":119,"user_id":1},
        {"id":99,"timestamp":"2019-02-01T03:19:23Z","value":122,"user_id":1},
        {"id":100,"timestamp":"2019-02-01T07:39:09Z","value":108,"user_id":1},
        {"id":101,"timestamp":"2019-02-01T08:32:25Z","value":103,"user_id":1},
        {"id":102,"timestamp":"2019-02-01T00:19:18Z","value":118,"user_id":1},
        {"id":103,"timestamp":"2019-02-01T06:05:18Z","value":107,"user_id":1},
        {"id":104,"timestamp":"2019-02-01T03:13:51Z","value":125,"user_id":1},
        {"id":105,"timestamp":"2019-02-01T06:17:31Z","value":109,"user_id":1},
        {"id":106,"timestamp":"2019-02-01T00:17:54Z","value":105,"user_id":1},
        {"id":107,"timestamp":"2019-02-01T03:14:28Z","value":117,"user_id":1},
        {"id":108,"timestamp":"2019-02-01T04:38:08Z","value":106,"user_id":1},
        {"id":109,"timestamp":"2019-02-01T09:05:34Z","value":119,"user_id":1},
        {"id":110,"timestamp":"2019-02-01T02:08:03Z","value":121,"user_id":1},
        {"id":111,"timestamp":"2019-02-01T06:57:28Z","value":108,"user_id":1},
        {"id":112,"timestamp":"2019-02-01T04:13:48Z","value":118,"user_id":1},
        {"id":113,"timestamp":"2019-02-01T07:48:31Z","value":101,"user_id":1},
        {"id":114,"timestamp":"2019-02-01T09:33:11Z","value":113,"user_id":1},
        {"id":115,"timestamp":"2019-02-01T03:36:10Z","value":103,"user_id":1},
        {"id":116,"timestamp":"2019-02-01T08:47:39Z","value":114,"user_id":1},
        {"id":117,"timestamp":"2019-02-01T05:36:50Z","value":106,"user_id":1},
        {"id":118,"timestamp":"2019-02-01T05:59:32Z","value":125,"user_id":1},
        {"id":119,"timestamp":"2019-02-01T08:44:45Z","value":116,"user_id":1},
        {"id":120,"timestamp":"2019-02-01T10:44:11Z","value":110,"user_id":1},
        {"id":121,"timestamp":"2019-02-01T01:27:04Z","value":113,"user_id":1},
        {"id":122,"timestamp":"2019-02-01T07:29:16Z","value":106,"user_id":1},
        {"id":123,"timestamp":"2019-02-01T04:14:32Z","value":102,"user_id":1},
        {"id":124,"timestamp":"2019-02-01T10:57:44Z","value":107,"user_id":1},
        {"id":125,"timestamp":"2019-02-01T01:57:22Z","value":122,"user_id":1},
        {"id":126,"timestamp":"2019-02-01T03:59:30Z","value":100,"user_id":1},
        {"id":127,"timestamp":"2019-02-01T04:06:01Z","value":102,"user_id":1},
        {"id":128,"timestamp":"2019-02-01T07:55:47Z","value":121,"user_id":1},
        {"id":129,"timestamp":"2019-02-01T11:28:56Z","value":124,"user_id":1},
        {"id":130,"timestamp":"2019-02-01T05:23:02Z","value":119,"user_id":1},
        {"id":131,"timestamp":"2019-02-01T11:10:25Z","value":106,"user_id":1},
        {"id":132,"timestamp":"2019-02-01T09:20:31Z","value":119,"user_id":1},
        {"id":133,"timestamp":"2019-02-01T00:22:16Z","value":110,"user_id":1},
        {"id":134,"timestamp":"2019-02-01T07:00:55Z","value":105,"user_id":1},
        {"id":135,"timestamp":"2019-02-01T09:36:26Z","value":102,"user_id":1},
        {"id":136,"timestamp":"2019-02-01T07:49:27Z","value":108,"user_id":1},
        {"id":137,"timestamp":"2019-02-01T09:20:09Z","value":100,"user_id":1},
        {"id":138,"timestamp":"2019-02-01T07:42:40Z","value":114,"user_id":1},
        {"id":139,"timestamp":"2019-02-01T01:29:33Z","value":115,"user_id":1},
        {"id":140,"timestamp":"2019-02-01T10:11:02Z","value":103,"user_id":1},
        {"id":141,"timestamp":"2019-02-01T01:15:53Z","value":114,"user_id":1},
        {"id":142,"timestamp":"2019-02-01T01:38:55Z","value":107,"user_id":1},
        {"id":143,"timestamp":"2019-02-01T00:15:58Z","value":115,"user_id":1},
        {"id":144,"timestamp":"2019-02-01T11:54:18Z","value":123,"user_id":1}
      ]);
    });
};
