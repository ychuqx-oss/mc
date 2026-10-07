const rows = `
c2-2026-002|26-C2-39|2026-07-23|6|others|⭐|Stream|Miko遊玩《Hololive Dreams》序章時，白上吹雪NPC在一旁偷看miComet|While Miko plays the Hololive Dreams prologue, Fubuki's NPC watches MiComet from nearby
c2-2026-003|26-C2-41|2026-07-21|6|miko|🌸|Text|Miko發布miComet六周年「會議紀錄」紀念結成六周年|Miko posts MiComet 6th anniversary meeting notes
c2-2026-004|26-C2-42|2026-07-21|6|shared|💛|Stream|miComet六周年逆凸請白上吹雪、尾丸波爾卡與しぐれうい提出新衣裝方案|MiComet asks Fubuki, Polka, and Ui for new matching outfit ideas on their 6th anniversary
c2-2026-005|26-C2-43|2026-07-19|6|miko|🌸|Text|Miko宣布miComet六周年直播將於7月21日舉行|Miko announces miComet’s 6th anniversary stream will be on July 21
c2-2026-007|26-C2-44|2026-07-07|6|miko|🌸|Stream|Miko等待她的彥星星街|Miko waits for Suisei, her Hikoboshi
c2-2026-008|26-C2-46|2026-07-05|6|miko|🌸|Stream|Miko哄星街吃紅蘿蔔|Miko coaxes Suisei into eating carrots
c2-2026-010|26-C2-48|2026-07-03|6|miko|🌸|Stream|Miko在《節奏天國》用一頭身造型玩出miComet|Miko recreates MiComet with one-head-tall avatars in Rhythm Heaven
c2-2026-011|26-C2-49|2026-07-02|6|suisei|☄️|Stream|星街抱怨Miko來家裡吃咖哩遲到|Suisei complains that Miko was late coming over for curry
c2-2026-013|26-C2-52|2026-06-25|6|shared|💛|Stream|Miko請星街下次再帶她去海外旅行|Miko asks Suisei to take her on another international trip
c2-2026-014|26-C2-53|2026-06-21|6|miko|🌸|Stream|Miko邀星街去鷹嶺琉依家吃飯，結果星街已經在場|Miko invites Suisei to Lui’s house for dinner, but Suisei already ate; but when Miko arrives at Lui’s place, Suisei is already there
c2-2026-016|26-C2-54|2026-06-13|6|suisei|☄️|Stream|星街因姊街做太多壽喜燒而叫Miko過來，並想冬天和Miko去露營|Suisei calls over Miko when Anemachi makes too much sukiyaki; also, she wants to go camping with Miko in the winter to help her get over her previous bad experiences
c2-2026-018|26-C2-55|2026-06-12|6|shared|💛|Stream|miComet加入輪堂千速直播，夏色祭說Miko想和星街約會|MiComet join Chihaya’s stream; Matsuri says that Miko wants to go on a date with Suisei, and Suisei responds cooly
c2-2026-020|26-C2-56|2026-06-07|6|suisei|☄️|Stream|星街活動3000日雜談中打電話給Miko|Suisei calls Miko during her 3000-day activity anniversary chat
c2-2026-021|26-C2-57|2026-06-07|6|miko|🌸|Stream|Miko拿走星街手機並用它發文|Miko takes Suisei’s phone and posts on it
c2-2026-026|26-C2-58|2026-06-03|6|others|⭐|Stream|白上吹雪在Hololive通話中看到miComet互動後連續大聲反應|Fubuki repeatedly reacts loudly after seeing MiComet interact during a Hololive call
c2-2026-027|26-C2-59|2026-05-31|6|miko|🌸|Stream|Miko回顧Biji Camp露營，提到姊街被嚇到尖叫|Miko looks back on Biji Camp and recalls Anemachi screaming after being startled
c2-2026-028|26-C2-60|2026-05-30|6|miko|🌸|Text|Miko與星街發布與露營行程有關的推文|Miko and Suisei post about their camping trip
c2-2026-029|26-C2-61|2026-05-26|6|miko|🌸|Stream|Miko談上次露營、星街的行動力，以及即將再和姊街、星街去露營|Miko talks about the previous camping trip, Suisei’s adventurous side, and going camping with Anemachi and Suisei again in a few days
c2-2026-031|26-C2-62|2026-05-24|6|others|⭐|Stream|白上吹雪談旅行回程時星街因寂寞改坐FubuMio車，Miko和狗狗親坐在後座|Fubuki talks about the trip with Anemachi, Mio, and miComet; on the way back, Suisei rode in FubuMio’s car with Miko and Inuchi in the back instead of with Anemachi because she was lonely
c2-2026-032|26-C2-63|2026-05-23|6|miko|🌸|Stream|Miko談和姊街、FubuMio、星街旅行，以及姊街幫她吹頭髮|Miko talks about the trip with Anemachi, FubuMio, and Suisei, including getting her hair dried by Anemachi
c2-2026-034|26-C2-64|2026-05-18|6|miko|🌸|Stream|Miko覺得星街比一條莉莉華更容易在旅行中出包|Miko thinks Suisei is more likely to mess up on a trip than Ririka
c2-2026-035|26-C2-65|2026-05-18|6|others|⭐|Stream|Miko寫給佃煮海苔男，說能在星街家看到狗狗親|Miko writes to Ui-mama that she can see Inuchi at Suisei’s
c2-2026-036|26-C2-66|2026-05-17|6|miko|🌸|Stream|Miko注意到遊戲服裝像星街的衣服|Miko notices that in-game clothes look like Suisei’s outfit
c2-2026-037|26-C2-68|2026-05-15|6|suisei|☄️|Stream|星街不想有任何事輸給Miko|Suisei doesn’t want to be worse than Miko at anything
c2-2026-038|26-C2-69|2026-05-15|6|suisei|☄️|Stream|星街教Miko安排休息日|Suisei teaches Miko how to schedule her rest days
c2-2026-039|26-C2-67|2026-05-16|6|others|⭐|Stream|大空昴騙Miko參加星街的肌肉訓練|Subaru tricks Miko into joining Suisei’s muscle training
c2-2026-041|26-C2-70|2026-05-13|6|miko|🌸|Stream|Miko在R.E.P.O.又把大空昴叫成星街，還請星街陪她去廁所|Miko calls Subaru “Suisei” again in R.E.P.O.; Miko asks Suisei to hold her while she goes to the bathroom
c2-2026-042|26-C2-71|2026-05-13|6|others|⭐|Stream|Reine遊戲中出現miComet告白情節|MiComet confess in Reine’s game
c2-2026-043|26-C2-72|2026-05-12|6|miko|🌸|Stream|Miko談章魚燒派對、做咖哩，以及星街和別人玩Shadowverse|Miko talks about the takoyaki party and making curry; she is (playfully) miffed that Suisei was playing Shadowverse with others
c2-2026-044|26-C2-73|2026-05-11|6|others|⭐|Stream|Reine遊戲中miComet也墜入愛河|MiComet also fell in love in Reine’s game
c2-2026-045|26-C2-74|2026-05-11|6|others|⭐|Stream|一條莉莉華分享星街罵Miko吃完就睡在沙發上的故事|Ririka shares a story of Suisei scolding Miko for falling asleep on her couch right after eating; Miko does the dishes by herself next time
c2-2026-046|26-C2-75|2026-05-09|6|miko|🌸|Stream|Miko在姊街不在時煮咖哩給鷹嶺琉依與星街|Miko cooks curry for Lui and Suisei while Anemachi is gone
c2-2026-047|26-C2-76|2026-05-08|6|others|⭐|Stream|大空昴提到Miko在星街沙發上睡著的章魚燒派對故事|Subaru tells a story of Miko falling asleep on Suisei’s couch at a takoyaki party
c2-2026-050|26-C2-80|2026-04-25|6|others|⭐|Stream|白上吹雪的朋友收藏集中miComet開始交往|MiComet start dating in Fubuki’s Tomodachi Life stream
c2-2026-051|26-C2-81|2026-04-23|6|miko|🌸|Text|miComet也在博衣小夜璃的島上配對|MiComet are also matched on Koyori’s island
c2-2026-052|26-C2-78|2026-04-27|6|miko|🌸|Stream|Miko的《朋友收藏集》中miComet開始同居，Miko吐槽「商業違規」|MiComet start living together in Miko's Tomodachi Life, and Miko calls it a business violation
c2-2026-055|26-C2-82|2026-04-19|6|miko|🌸|Text|Miko為星街家做燉菜|Miko makes stew for the Hosimachis
c2-2026-056|26-C2-83|2026-04-17|6|others|⭐|Stream|白上吹雪想知道Miko是不是想星街了|Fubuki wonders if Miko is missing Suisei
c2-2026-060|26-C2-84|2026-04-11|6|others|⭐|Stream|大神澪談到與miComet、姊街和狗狗親露營|Mio talks about camping with miComet, Anemachi, and Inuchi
c2-2026-062|26-C2-85|2026-04-08|6|suisei|☄️|Stream|星街要求星詠注意言行，Miko說聞狗狗親味道會冷靜|Suisei speaks out against misbehaving Hoshiyomis; Miko comments that she’ll calm down after sniffing Inuchi
c2-2026-064|26-C2-86|2026-04-05|6|suisei|☄️|Text|星街在Twitter Space中因狗狗親叫聲暴露人在Miko家|Suisei is caught at Miko’s place thanks to Inuchi’s bark during her Twitter space
c2-2026-067|26-C2-87|2026-03-26|6|shared|💛|Stream|博衣小夜璃發現miComet互相在家裡擺對方娃娃|MiComet display each other’s plushies in their houses; Koyori thinks this is teetee
c2-2026-068|26-C2-88|2026-03-24|6|shared|💛|Stream|miComet開台商量星街新公司相關問題|MiComet consultation stream about Suisei’s new agency
c2-2026-069|26-C2-89|2026-03-22|6|miko|🌸|Text|miComet宣布要開台回答星街新公司相關問題|MiComet announce a stream to answer questions about Suisei’s new agency
c2-2026-070|26-C2-90|2026-03-22|6|miko|🌸|Stream|Miko炫耀自己的Biji派對|Miko brags about her bijipa
c2-2026-072|26-C2-91|2026-03-21|6|suisei|☄️|Stream|星街傳訊息問Miko薯條喜好|Suisei messages Miko to ask about her preferences for fries
c2-2026-073|26-C2-92|2026-03-21|6|suisei|☄️|Audio|星街在廣播中與35P父親互動|Suisei interacts with a 35P father
c2-2026-074|26-C2-93|2026-03-20|6|others|⭐|Stream|鷹嶺琉依家離Miko和星街很近|Lui’s house is close to Miko and Suisei
c2-2026-075|26-C2-94|2026-03-16|6|miko|🌸|Stream|Miko提到星街很常用衛生紙|Miko mentions that Suisei uses a lot of tissues
c2-2026-076|26-C2-95|2026-03-16|6|suisei|☄️|Stream|Huggy Wuggy和Kissy Missy在星街直播中相遇|Huggy Wuggy and Kissy Missy meet on Suisei’s stream
c2-2026-077|26-C2-96|2026-03-14|6|miko|🌸|Stream|Miko展示與星街在Pokemon Pokopia中的合照|Miko shows off her photo with Suisei in Pokemon Pokopia
c2-2026-078|26-C2-97|2026-03-14|6|suisei|☄️|Stream|星街低估Miko在Pokemon Pokopia中的進度|Suisei underestimates Miko’s progress in Pokemon Pokopia
c2-2026-082|26-C2-98|2026-03-08|6|suisei|☄️|Stream|星街談HoloFes沒有miComet|Suisei talks about no miComet at HoloFes
c2-2026-083|26-C2-99|2026-03-05|6|miko|🌸|Stream|Miko生日前夕打給星街，兩人談第一次認識彼此與想吃的手料理|On the eve of Miko's birthday, Miko calls Suisei and they talk about when Suisei first noticed her and what home-cooked food she wants
c2-2026-088|26-C2-100|2026-02-21|6|miko|🌸|Text|Miko送花籃給星街演唱會|Miko sends a flower stand to Suisei’s concert
c2-2026-089|26-C2-101|2026-02-17|6|suisei|☄️|Text|星街拍下Miko屁股照|Suisei takes butt shots of Miko
c2-2026-091|26-C2-102|2026-02-17|6|others|⭐|Stream|蘿蔔子把姊街誤認成星街，事後才發現搞錯人|Roboco mistakes Anemachi for Suisei and realizes the mix-up
c2-2026-093|26-C2-103|2026-02-14|6|shared|💛|Stream|miComet公開第二套成對新衣裝並進行VR凸待|MiComet reveal their second matching outfits and hold a VR call-in
c2-2026-096|26-C2-104|2026-02-09|6|miko|🌸|Stream|Miko與常闇永遠聊年齡時提到星街也說過相同內容|Miko mentions that Suisei had said the same thing while talking about age with Towa
c2-2026-097|26-C2-105|2026-01-29|6|miko|🌸|Stream|Miko透露星街推薦她看《チ。》，自己已和Biji派對一起追了多集|Miko says Suisei recommended Orb and she watched several episodes with her Biji group
c2-2026-098|26-C2-106|2026-01-29|6|miko|🌸|Stream|Miko驚訝星街現在能吃更多蔬菜|Miko is surprised that Suisei can eat more vegetables now
c2-2026-099|26-C2-107|2026-01-29|6|miko|🌸|Stream|Miko在隔日直播提到連續到星街家吃飯，也加入Biji派對|Miko recalls consecutive dinners at Suisei's home and joining the Biji group
c2-2026-100|26-C2-108|2026-01-24|6|shared|💛|Stream|Miko與星街同屬花組參加新春遊戲祭《瑪利歐賽車世界》|Miko and Suisei compete on Team Flower in the New Year Game Festival's Mario Kart World event
c2-2026-103|26-C2-109|2026-01-20|6|others|⭐|Stream|Miko數位排毒期間，星街用LINE轉傳海外35P推文支持|During Miko’s digital detox, Suisei sends overseas 35P Twitter support to Miko via LINE
c2-2026-104|26-C2-110|2026-01-17|6|suisei|☄️|Stream|星街玩《HoloGuard》時連續猜中Miko的思考方式|Suisei repeatedly predicts Miko's thinking while playing HoloGuard
c2-2026-106|26-C2-111|2026-01-03|6|miko|🌸|Stream|Miko在新年關係圖把星街寫成「會送飯的妖精」，並寄出年賀狀|Miko labels Suisei as a food-delivering fairy on her New Year relationship chart and sends her a New Year card
c2-2026-108|26-C2-112|2026-01-01|6|shared|💛|Stream|新春五子棋大賽原定Miko首戰星街，但因賽程事故未能完成miComet對決|Miko was scheduled to face Suisei in the New Year Gomoku tournament, but the miComet match did not happen after event trouble
`.trim();

function zhBodyFor(title: string, _date: string) {
  return `${title}。`;
}

function enBodyFor(title: string, _date: string) {
  return `${title}.`;
}

const data = rows.split('\n').map((row) => {
  const [id, displayId, date, phase, side, emoji, type, titleZh, titleEn] = row.split('|');
  const ctxZh = zhBodyFor(titleZh, date);
  const ctxEn = enBodyFor(titleEn || titleZh, date);
  return {
    id,
    displayId,
    date,
    phase: Number(phase),
    side: side as 'miko' | 'suisei' | 'shared' | 'others',
    emoji,
    title: titleEn || titleZh,
    titleZh,
    titleEn: titleEn || titleZh,
    ctx: ctxEn,
    ctxZh,
    ctxEn,
    type,
    link: '',
    source: 'uploaded 2026 list',
  };
});

export default data;
