import q1 from './timeline-2025-compendium-q1';
import q2 from './timeline-2025-compendium-q2';
import q3 from './timeline-2025-compendium-q3';
import q4 from './timeline-2025-compendium-q4';

const rows = [q1, q2, q3, q4].filter(Boolean).join('\n');

const englishRows = `
2025-12-30|Suisei bakes cookies for Miko
2025-12-30|MiComet and Lui join Fubuki for a call; Fubuki obsesses over miComet teetee cookies, and miComet share thoughts on each other’s sleeping habits
2025-12-29|MiComet make an appearance in Watame’s MV
2025-12-27|Suisei shows up for Miko’s 25-hour stream, Miko asks her to sleep with her
2025-12-26|Miko talks about Suisei giving her a strawberry after Botan forgets to give her hers
2025-12-26|Miko retweets Christmas miComet art
2025-12-24|Miko talks about having dinner with Fubuki, Lui, and Suisei, and setting up the tree at Suisei’s place
2025-12-24|MiComet at Bae’s Christmas party
2025-12-23|MiComet Minecraft date
2025-12-22|Ayame + Laplus + MiComet MIMESIS collab
2025-12-22|Miko plans to work with Suisei on the Minecraft project
2025-12-21|Miko finds Anemachi’s cabbage rolls at her entrance when she wakes up
2025-12-20|Miko says that the name of the person she likes can’t be Suisei
2025-12-18|Miko refers to fairy-san again
2025-12-18|Miko tweet
2025-12-15|Miko complains about Suisei abruptly shutting the door in the middle of her goodbyes
2025-12-13|Miko forgets her bag at Lui’s place, Lui later returns it when Miko is at Suisei’s place; Suisei wants to take Miko to a party
2025-12-13|Suisei has larger hands than Miko?
2025-12-12|Miko uses part of miComet artwork for her karaoke stream and sings Kireigoto
2025-12-11|Miko talks about Suisei
2025-12-11|Miko retweets miComet art
2025-12-09|Miko refers to herself as Anemachi’s little sister
2025-12-08|MiComet designs
2025-12-06|Miko’s top Discord friends are Lui, Subaru, and Suisei
2025-12-05|Miko talks about the fortune teller incident again
2025-12-04|Miko talks about Suisei
2025-12-01|Suisei says getting married is impossible for her and talks about her ideal partner
2025-11-30|MiComet + Suu join a voice channel together, Suisei claims Suu as her daughter
2025-11-29|Minecraft Collab
2025-11-28|Lui tells a story about miComet yakiniku, and Suisei placing Miko’s grilled meat between the grill and the plate
2025-11-28|Subaru shares a story of Miko reacting to Suisei with a donut cushion on her head
2025-11-25|Miko reports on Suisei
2025-11-24|Iroha reacts to Miko’s sign
2025-11-23|Miko creates a sign saying that Suisei has a cute girlfriend; she also calls out to Suisei for help, and Suisei was watching
2025-11-22|Miko waits for Suichan Eats
2025-11-17|Miko gifts Suisei a doll, Suisei puts the magical girl clothes on her Suifriend plushie
2025-11-16|Suisei delivers food to Miko
2025-11-14|FubuMiComet on Suisei’s SUPERNOVA announcement; Suisei brings back a signed towel from Sambomaster for Miko
2025-11-02|Miko talks about not wanting to get married, and exposes Suisei’s joy at seeing other holomems wanting her curry
2025-10-28|Miko almost shares another story of having a meal with Suisei
2025-10-27|Miko gives Ririka fluffy socks at Suisei’s house
2025-10-24|Miko has more sukiyaki with Suisei
2025-10-24|Suisei gives a shoutout
2025-10-22|Miko talks about Anemachi, Fubuki, Subaru, Suisei, and Ui visiting her house; having sukiyaki with Suisei; and confusing Suisei with Hoshitani
2025-10-20|Miko retweets gay miComet art
2025-10-19|Suisei names Miko as the closest holomem to her
2025-10-16|Iroha finds it cute that Suisei is tsundere around Miko
2025-10-15|Miko retweets miComet art
2025-10-13|MiComet blame each other for not having a miComet live concert, and FubuMiComet take a hamster personality quiz
2025-10-12|Suisei enters a Chiikawa lottery for Miko’s sake
2025-10-12|Miko retweets miComet art
2025-10-08|Miko comments on fanart
2025-10-03|FubuMio MiComet
2025-10-03|KAI-YOU reports on miComet’s new song Lollipop and its creators
2025-10-03|MiComet's second original song Lollipop is officially released
2025-10-02|MiComet have an amusement park date with matching outfits and reveal a new original song
2025-10-02|Miko backseats Suisei in TCG Card Shop Simulator
2025-10-02|Official miComet new outfit merchandise goes on sale
2025-09-29|MiComet start teasing something
2025-09-28|FubuMiComet Minecraft Manager
2025-09-28|FubuMiComet take part in Minecraft Kimodameshi 2025
2025-09-26|Miko became more outgoing due to Suisei’s influence
2025-09-26|Subaru talks about miComet playing the Switch together
2025-09-24|Suisei helps MikoSuba defuse a bomb
2025-09-22|Miko retweets gay miComet art
2025-09-22|Miko asks Kanata and Lamy who they’d rather date between miComet
2025-09-16|Suisei hiding her belly only makes Miko want to see it more
2025-09-12|Miko bought the pair rings
2025-09-11|Suisei on Miko’s baseball team
2025-09-09|Miko calls Subaru “Suisei” again
2025-09-08|Miko retweets miComet art
2025-09-07|Miko refers to herself and Suisei as princess and prince
2025-09-06|Hololive 8th anniversary 0th gen fireworks
2025-09-05|Gen 0 personality test collab
2025-08-31|Miko talks about Suisei
2025-08-31|Miko gets teased about Suisei
2025-08-30|Suisei wants to tease Miko with the autograph
2025-08-29|VRC haunted house collab organized by Fubuki
2025-08-29|Suisei gets Miko an autograph from the Sambomaster live
2025-08-28|Suisei suggests that Miko gets hair buns; Miko calls Suisei an M and talks about her strange habits
2025-08-26|Miko shares a story about Iroha/Suisei
2025-08-26|Miko retweets miComet art
2025-08-24|MiComet in Koyori’s Minecraft Werewolf collab
2025-08-23|Suisei likes miComet art
2025-08-23|Miko explains the Tamagotchi incident and talks about the bento that Anemachi made for her
2025-08-22|Suisei complains to Lui that Miko didn’t give her the Tamagotchi
2025-08-19|Suisei has a mysterious idea for a game involving monitoring the recording of a bed, seeing a dog on it, and reporting to the owner
2025-08-18|Miko shares a story of off-mode Kanahei Suisei and talks about the 94-year-old 35P
2025-08-17|NHK Radio finds a 94-year-old 35P; Suisei talks about not getting married
2025-08-16|Hololive Summer Park, amusement park date
2025-08-14|Hololive Summer Park
2025-08-13|Miko retweets miComet art
2025-08-12|Hololive Summer Park
2025-08-12|Miko plays a rhythm game with BIBBIDIBA
2025-08-12|Lui wants to build an airship for miComet
2025-08-09|Kanata talks about the pair rings she gave to Miko
2025-08-08|Miko retweets miComet
2025-08-08|Lui talks about playing a murder mystery game with Ayame, Fubuki, Miko, Mio, Subaru, and Suisei
2025-08-06|Suisei joins Miko’s collab with Subaru
2025-08-04|Miko retweets miComet art
2025-08-03|Kanata picks pair rings for Miko to wear with Suisei
2025-08-02|Miko’s 7th anniversary; Suisei wins the Miko Expert Championship
2025-08-02|Subaru talks about the cotton candy party with miComet + others
2025-08-01|Miko totsu machi
2025-08-01|Mori pulls miComet keychains
2025-07-31|Miko declares that Suisei’s home is Miko’s second home
2025-07-28|Suisei calms herself down by thinking about Inuchi
2025-07-28|Hololive Hanafuda collab
2025-07-25|Iroha likes miComet
2025-07-24|Shiraken minus Suisei collab
2025-07-20|MiComet vote together
2025-07-20|Miko retweets a lot of miComet art
2025-07-19|MiComet go on a business trip for their anniversary, Miko teases a Twitter Space
2025-07-18|Gen 0 collab: managers comment on their talents
2025-07-16|Suisei realizes that she forgot to remove the filter from her SHARP purifier
2025-07-15|Miko retweets miComet art
2025-07-14|Fubuki
2025-07-07|MiComet have suspiciously matching clothes in promo
2025-07-07|Matsuri insists that miComet are not business
2025-07-06|Miko denies the allegations
2025-07-06|Suisei talks about Miko’s streaming frequency, and playing Minecraft with her on the day the world was prophesied to end
2025-07-04|MiComet Minecraft project
2025-07-03|Shiraken REPO
2025-07-02|MiComet have matching members’ wallpapers this month
2025-07-02|Shiraken REPO
2025-06-28|FubuMiComet + Mio + Ririka electric chair game
2025-06-27|Suisei scares Miko by sending her miComet fanart after Miko wins the Switch 2 lottery
2025-06-26|Suisei pressures Miko to watch Gundam immediately
2025-06-25|Korone, Lamy, Marine, and Noel talk about who should be the top in miComet fanfics
2025-06-24|Miko retweets a miComet animation
2025-06-24|Suisei tells Marine to hang out with Fubuki and Miko in order to gain motivation
2025-06-22|Suisei retweets miComet art
2025-06-22|Miko brags about winning the Switch 2 lottery
2025-06-20|Suisei calls into Miko’s stream and they talk about the Minecraft castle project, Gundam, Raft, and their upcoming anniversary
2025-06-20|MiComet plan to build Minecraft castles
2025-06-18|Suisei watches Miko’s stream
2025-06-18|Suisei’s chat tells her to watch the final Gundam episode on Miko’s TV
2025-06-17|Miko mentions Suisei in her Switch 2 lottery stream
2025-06-16|Miko retweets art of maid miComet making a heart with their hands
2025-06-15|Miko mentions that miComet have matching ribbons
2025-06-12|Flirting on sub accounts
2025-06-12|MiComet featured in hololive situation
2025-06-11|Miko retweets miComet art
2025-06-08|FubuMiComet VRChat
2025-06-08|Fubuki appreciates miComet teetee
2025-06-06|Miko talks about Suisei again
2025-06-06|The hololive magazine features miComet
2025-06-05|Mario Kart collab
2025-06-05|Lui reacts cutely to miComet in her short
2025-06-03|Miko sends an invitation to Suisei for Mario Kart
2025-06-01|Miko mentions Suisei in her stream
2025-06-01|Fubuki teases FubuMiComet in June
2025-05-31|Miko mentions Suisei spamming stickers in their LINE chats, and that Suisei is the reason why she goes out more often now
2025-05-31|Miko retweets miComet art
2025-05-29|SubaMiComet R.E.P.O. collab
2025-05-28|Miko talks about Suisei and her dog
2025-05-27|Miko wants to play a co-op game with Suisei, but is scared that Suisei will get mad at her
2025-05-26|Miko has a dream about her business partner
2025-05-25|Miko draws her dog with a Suisei plushie
2025-05-23|Kanade describes miComet’s relationship
2025-05-22|Suisei complaints about Miko’s unfinished Minecraft builds
2025-05-20|Suisei’s short features Mikolingo
2025-05-19|At Mio’s party, Miko makes Suisei fry food and Suisei complies
2025-05-19|Suisei returns and talks about her business partner brainwashing her
2025-05-15|Suisei calls into Miko’s stream and teases miComet content
2025-05-12|Suisei mentions in Miko’s mengen
2025-05-12|Miko retweets miComet (+ Kanade/Suu) art
2025-05-11|Suisei caves in and looks for a smartphone cover
2025-05-11|Iroha refers to the Minecraft ship as “miComet’s bond”
2025-05-10|Miko talks about Suisei, shoulder massages, and her Sambomaster collab
2025-05-10|On NHK Radio, Marine wonders why Miko wasn’t called to fill for Suisei’s absence instead
2025-05-08|Lui talks about miComet
2025-05-06|Suisei opens and miComet went to a fortune teller
2025-05-06|Miko retweets miComet art
2025-05-02|In the Minecraft fishing contest, Suisei builds a boat for Miko and rushes over when she sees the boat on fire
2025-05-02|Miko retweets miComet art
2025-05-02|Suisei tweets and hosts a Twitter Space about having dinner alone while Miko is with friends
2025-05-02|Miko talks about Suisei
2025-05-02|Good Smile Company posts miComet teetee
2025-05-02|Miko posts a short with Suisei
2025-05-01|Miko streams a gal game off-stream to holomems (including Suisei) and talks about not replying to Suisei on LINE
2025-04-30|Miko retweets more FubuMiComet art
2025-04-27|Suisei’s radio guest is a big fan of Miko and gushes about DDD Transcription
2025-04-24|Miko reflects on MikoShuba being less teetee than miComet
2025-04-23|Miko prefers a good voice and a good singer for her partner
2025-04-21|Suisei hosts a Twitter Space, mentions business trip with Miko
2025-04-18|FubuMiComet collab: MiComet go on a date, Suisei tries to feed Miko
2025-04-16|Miko talks about Suisei planning a private flower viewing on a boat for her, and Suisei showing her a miComet version of a Gundam animation
2025-04-14|Miko goes on a trip to the hot springs with Anemachi and Suisei
2025-04-14|Miko dances to Soiree in her short
2025-04-12|Fubuki talks about miComet and VRChat
2025-04-11|Miko asks if Suichan wants to be eaten
2025-04-11|Miko retweets miComet art
2025-04-09|Fubuki and Suisei appear in Miko’s short
2025-04-08|Miko refers to Suisei’s house as Miko’s garden
2025-04-06|Miko admits to bringing a Suisei plushie on trips
2025-04-06|Miko retweets FubuMiComet
2025-04-05|Miko thinks it will be fun to put Suisei in a haunted mansion
2025-04-04|Kanade is very considerate of miComet
2025-04-03|Watame notices business violation
2025-04-01|On April Fools’ Day, Miko unveils her Live2D and Suisei joins her
2025-03-29|Miko talks about going on a walk with Suisei
2025-03-27|Miko talks about showing the miComet Weiss Schwarz card to Suisei and wanting to go on a trip with Suisei
2025-03-27|Miko responds to Holo Village miComet tweet
2025-03-26|Miko wants to go out for walks with Suisei
2025-03-24|Miko talks about her manager and getting a card signed by Suisei
2025-03-24|Miko parodies Caramel Pain
2025-03-22|For Suisei’s birthday/anniversary, miComet give a present to a newborn baby named Miko
2025-03-22|Suisei and Daoko talk about Miko
2025-03-21|Miko recommends Suisei in hair buns
2025-03-20|Suisei asks for the chiisai jokes to stop
2025-03-16|Miko retweets miComet art
2025-03-16|AZKi asks Suisei for a miComet collab with Iroha, and Suisei gushes about Miko’s boat to her
2025-03-15|Miko retweets miComet art
2025-03-14|Miko builds a boat for Suisei on White Day
2025-03-11|Miko talks about miComet both forgetting to bring their plushies
2025-03-10|Miko says that Suisei’s sleeping face is not that rare
2025-03-10|Suisei talks about holofes and playing cards for Miko
2025-03-10|Miko retweets miComet cosplay
2025-03-10|Fubuki tweets about miComet
2025-03-10|Ao, Lui, Marine, Noel, and Subaru talk about the miComet waiting room card game incident
2025-03-10|Iroha doesn’t want to get between miComet
2025-03-09|Gen 0 perform BIBBIDIBA at holofes in the Creators’ Stage
2025-03-09|Miko talks about miComet opening and closing holofes
2025-03-09|Kanade loves miComet
2025-03-07|Miko reacts to miComet art
2025-03-06|Okayu asks if Suisei is prone to Miko’s insults
2025-03-05|Miko’s Re:flection MV has the same director as Suisei’s GHOST MV
2025-03-05|Kanade and Niko observe miComet teetee
2025-03-04|Minecraft
2025-03-03|Suisei complains about Miko not telling her about playing Minecraft
2025-03-03|Miko’s stream thumbnail is miComet art
2025-03-03|Niko avoids interrupting miComet teetee
2025-03-02|Miko retweets miComet
2025-03-01|Suisei joins Miko’s tournament as a last minute co-host in case Miko has a stomach issue
2025-02-28|Miko hosts a tournament
2025-02-27|Miko flirts with Subaru and Subaru asks Suisei for help
2025-02-27|Suisei gives a piece of Miko to Koyori
2025-02-27|Miko uses kyou mo kawaii as the example for her tweet
2025-02-26|Miko appears in a shootout in Suisei’s short
2025-02-25|Suisei plays Poppy Playtime and refers to Kissy Missy as Miko
2025-02-24|Miko retweets MaguTako for their anniversary
2025-02-24|AZKi also wonders if Sora’s nyumu is about miComet
2025-02-23|Suisei runs after Miko in the background of Towa’s short
2025-02-21|Minecraft
2025-02-21|Botan and Fubuki wear miComet masks and roleplay
2025-02-21|MiComet appear in a hololive short
2025-02-20|Minecraft
2025-02-19|Miko talks about business forever
2025-02-19|Suisei takes a screenshot from Miko’s stream
2025-02-18|Minecraft
2025-02-17|Miko complains about business violation
2025-02-17|Minecraft
2025-02-16|Minecraft
2025-02-15|FubuMiComet in voice chat
2025-02-14|Suisei’s stream thumbnail on Valentine’s Day is from miComet art
2025-02-13|MiComet appear as guests in Fubuki’s solo live FBKINGDOM ANTHEM
2025-02-13|MiComet appear in Fubuki’s MV
2025-02-13|Miko retweets FubuMiComet art
2025-02-11|MiComet teetee on Fubuki’s stream
2025-02-11|Hajime pulls Miko’s fortune in Minecraft telling her to ask the next person she encounters (Suisei) for her leg hair; Miko declares that Suisei is indeed growing leg hair
2025-02-10|Minecraft
2025-02-09|Minecraft
2025-02-09|Kanade tweets about miComet
2025-02-08|Daoko, a hardcore 35P, appears on NHK Radio
2025-02-07|Minecraft
2025-02-06|Miko retweets miComet art
2025-02-05|Minecraft
2025-02-04|Miko plays Poppy Playtime
2025-02-04|Suisei works on Miko’s Minecraft project
2025-02-03|MiComet play on the new Minecraft server
2025-02-01|Miko tweets about Suisei’s Budokan live
2025-01-28|Miko retweets miComet
2025-01-28|Suisei’s solo Fast Food Simulator stream
2025-01-27|Suisei does not have time to join the Holonalds collab, so she plays silently alone and sends a video to Miko
2025-01-25|Miko talks about going to Suisei’s house for oysters and compares Cinderella after midnight to Suisei
2025-01-24|Miko retweets a mention of her on NHK VTuber
2025-01-22|Miko talks about going to the fortune teller with Anemachi and Suisei
2025-01-22|Hajime and Kanade make cheese fondue with miComet
2025-01-21|Suisei imagines Miko singing her song Deadpool
2025-01-14|Suisei talks with Tuki about romance
2025-01-13|Hololive New Year Game Festival
2025-01-11|Flower Rhapsody is played on NHK radio
2025-01-11|Miko accidentally left Suisei’s cup in her stream
2025-01-10|MiComet game practice
2025-01-09|Miko retweets gay art again from over a year ago
2025-01-09|Fubuki retweets a clip of herself watching miComet from afar
2025-01-08|Miko wins GOD twice, Suisei checks her stream while failing her own luck-based game with the same 1/8192 odds
2025-01-08|FubuMiComet featured by Holo Card
2025-01-07|Miko mentions FubuMiComet going to Osaka together and comments on miComet art
2025-01-06|Miko talks about Suisei exposing her
2025-01-05|MiComet banter about gomoku
2025-01-05|AZKi wants to invite miComet to a collab with Iroha
2025-01-04|Suisei hosts a Twitter Space, miComet message each other live
2025-01-04|Towa describes the seating arrangement at Suisei’s party
2025-01-02|MikKorone 24hour stream
2025-01-02|Suisei appears in the MikKorone MV
2025-01-01|Miko reviews some miComet content
2025-03-18|Miko Remembers Suisei Asking Her to Tell a Funny Story
2025-02-22|Miko Retweets miComet Art
2025-02-12|A miComet Reference Appears in a Tweet About Fubuki's Solo Live
2025-02-10|Kanata and Korone Make a miComet Joke
2025-01-19|Miko Knows Suisei's Greeting by Heart
2025-01-14|Suisei and Tuki Talk About Romance in a Way That Resembles Suisei's Interactions with Miko
2025-01-08|Holo Card Features FubuMiComet
2025-01-03|Ao and Marine Plan to Egg miComet On into Flirting
2025-06-17|Miko Posts a 'Caramel Pain' Short
2025-04-29|Miko Shows FubuMiComet VRChat Photos and Fubuki Teases Another VRChat Stream in May
2025-04-09|Fubuki and Suisei Appear in Miko's Short
2025-09-27|MiComet Make Surprise Calls and Announce Their Upcoming New Outfit Project
2025-08-19|Suisei Comes Up with a Strange Game Idea Involving Filming a Bed and a Dog
2025-08-09|Kanata Talks About Giving Miko and Suisei Matching Rings
2025-07-29|Marine Praises miComet
2025-07-14|Fubuki Supports miComet
2025-10-16|Iroha Thinks Suisei Being Tsundere Around Miko Is Cute
`.trim();

type Side = 'miko' | 'suisei' | 'shared' | 'others';

function cleanTitle(title: string) {
  return title
    .replace(/\s+/g, '')
    .replace(/Miko\s*轉推\s*miComet/g, 'Miko轉推miComet')
    .replace(/白上吹雪\s*發推\s*about\s*miComet/g, '白上吹雪發推談miComet')
    .replace(/Miko\s*對\s*miComet\s*圖/g, 'Miko對miComet圖作出反應')
    .replace(/Miko\s*轉推\s*MaguTako\s*為\s*周年/g, 'Miko轉推MaguTako周年圖')
    .replace(/Miko\s*談到\s*商業\s*forever/g, 'Miko談到商業Forever')
    .replace(/星街\s*拿走\s*screenshot\s*從\s*Miko的\s*直播/g, '星街從Miko直播中擷取截圖')
    .replace(/Miko\s*抱怨\s*商業\s*violation/g, 'Miko抱怨商業違規')
    .replace(/miComet\s*appear\s*在\s*Hololive\s*短片/g, 'miComet出現在Hololive短片')
    .replace(/miComet\s*appear\s*在\s*白上吹雪的\s*MV/g, 'miComet出現在白上吹雪MV')
    .replace(/miComet\s*teetee\s*在\s*白上吹雪的\s*直播/g, '白上吹雪直播中的miComet貼貼')
    .replace(/麥塊\s*Ao的\s*直播，Miko的\s*直播，星街的/g, 'Miko與星街參與麥塊互動')
    .replace(/FubuMiComet的FubuMiComet/g, 'FubuMiComet')
    .replace(/miCometfigures/g, 'miComet模型消息')
    .replace(/miCometfigurines/g, 'miComet模型消息')
    .replace(/miComet的圖/g, 'miComet圖')
    .replace(/miComet的/g, 'miComet')
    .replace(/Miko的/g, 'Miko')
    .replace(/星街的/g, '星街')
    .replace(/AZKi的/g, 'AZKi')
    .replace(/白上吹雪的/g, '白上吹雪')
    .replace(/旅行相關紀錄/g, '旅行話題')
    .replace(/睡覺相關紀錄/g, '睡覺話題')
    .replace(/打情罵俏相關紀錄/g, 'miComet打情罵俏')
    .replace(/麥塊、Raft相關紀錄/g, '麥塊與Raft互動')
    .replace(/周年、麥塊、Raft相關紀錄/g, '周年、麥塊與Raft互動')
    .replace(/周年、生日相關紀錄/g, '周年與生日互動')
    .replace(/圖、睡覺相關紀錄/g, 'miComet圖與睡覺話題')
    .replace(/廣播相關紀錄/g, '廣播中的miComet話題')
    .replace(/商業相關紀錄/g, '商業互動')
    .replace(/圖相關紀錄/g, 'miComet圖消息')
    .replace(/互動相關紀錄/g, 'miComet互動')
    .replace(/相關紀錄/g, '互動')
    .replace(/相關話題/g, '話題')
    .replace(/內容待補/g, '');
}

function cleanEnglish(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function buildEnglishQueues() {
  const map = new Map<string, string[]>();
  englishRows.split('\n').forEach((row) => {
    const [date, title] = row.split('|');
    if (!date || !title) return;
    const list = map.get(date) ?? [];
    list.push(cleanEnglish(title));
    map.set(date, list);
  });
  return map;
}

const englishQueues = buildEnglishQueues();

function nextEnglishTitle(date: string, fallback: string) {
  const list = englishQueues.get(date);
  const title = list?.shift();
  return cleanEnglish(title || fallback);
}

const verifiedSourceLinks2025: Record<string, { link: string; source: string }> = {
  'c2-2025-031': {
    link: 'https://www.youtube.com/watch?v=tyWUIwwh3r8',
    source: 'Subaru official YouTube original stream',
  },
  'c2-2025-037': {
    link: 'https://www.youtube.com/watch?v=7Ou6PG8WAWk',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-056': {
    link: 'https://www.youtube.com/watch?v=9SeFcJnQdqY',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-174': {
    link: 'https://www.youtube.com/watch?v=3KlfJAS7GBw',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-030': {
    link: 'https://www.youtube.com/watch?v=ZaV2Wz3a0Jw',
    source: 'Lui official YouTube original stream',
  },
  'c2-2025-016': {
    link: 'https://www.youtube.com/watch?v=qbtyffb5LQU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-038': {
    link: 'https://www.youtube.com/watch?v=2xeoAHEoKwM',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-102': {
    link: 'https://www.youtube.com/watch?v=XOB6HS-WETs',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-164': {
    link: 'https://www.youtube.com/watch?v=J3OlVvfvarQ',
    source: 'Kanade official YouTube original stream',
  },
  'c2-2025-182': {
    link: 'https://www.youtube.com/watch?v=D2Ki2BjqedU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-184': {
    link: 'https://www.youtube.com/shorts/a8culUA_WVQ',
    source: 'Miko official YouTube Short',
  },
  'c2-2025-148': {
    link: 'https://www.youtube.com/watch?v=-zro9f2kqiM https://www.youtube.com/watch?v=85B3oh9EGaY https://www.youtube.com/watch?v=vGLst2Sj0gc',
    source: 'Fubuki, Miko and Suisei official YouTube original streams',
  },
  'c2-2025-149': {
    link: 'https://www.youtube.com/watch?v=-zro9f2kqiM',
    source: 'Fubuki official YouTube original stream',
  },
  'c2-2025-192': {
    link: 'https://www.youtube.com/watch?v=PgLppZ_-cI4 https://www.youtube.com/watch?v=QXPOyHRst-Y',
    source: 'Miko and Fubuki official YouTube original streams',
  },
  'c2-2025-146': {
    link: 'https://shop.hololivepro.com/products/hololive_situationhololive_cafeteriaseries_vol1',
    source: 'hololive production official shop',
  },
  'c2-2025-151': {
    link: 'https://shop.hololivepro.com/products/hololivemagazine_spotlight_vol5',
    source: 'hololive production official shop',
  },
  'c2-2025-142': {
    link: 'https://www.youtube.com/watch?v=f_zmsF15Fkk',
    source: 'Miko official YouTube Short',
  },
  'c2-2025-195': {
    link: 'https://www.youtube.com/watch?v=kFOd-9Z1j2w',
    source: 'Miko official YouTube Short',
  },
  'c2-2025-200': {
    link: 'https://www.youtube.com/watch?v=x0Fnq6YzCoY',
    source: 'Miko official YouTube Short',
  },
  'c2-2025-237': {
    link: 'https://www.youtube.com/watch?v=W9AZc33ybIw https://www.youtube.com/watch?v=IKKar5SS29E',
    source: 'Miko and Suisei official YouTube MVs; both credit mokoppe for video',
  },
  'c2-2025-247': {
    link: 'https://www.youtube.com/watch?v=KXejezs5vQY',
    source: 'Koyori official YouTube original stream',
  },
  'c2-2025-232': {
    link: 'https://www.youtube.com/watch?v=VzGNuQHy5rk',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-257': {
    link: 'https://www.youtube.com/watch?v=FGZkT3wAjAw',
    source: 'Botan official YouTube original stream',
  },
  'c2-2025-269': {
    link: 'https://www.youtube.com/watch?v=BWEmA6AxIyM',
    source: 'Fubuki official YouTube original MV',
  },
  'c2-2025-275': {
    link: 'https://www.youtube.com/watch?v=HvehDSYPms0',
    source: 'Kanata official YouTube original stream',
  },
  'c2-2025-298': {
    link: 'https://www.youtube.com/watch?v=FHgeeY_UPiI https://www.youtube.com/watch?v=Yp6Rk4liU2s',
    source: 'Suisei and tuki. official YouTube videos',
  },
  'c2-2025-317': {
    link: 'https://www.youtube.com/watch?v=NDfliNBq4UA https://www.youtube.com/watch?v=S-FIuBHFhbU',
    source: 'Miko official YouTube original streams',
  },
  'c2-2025-116': {
    link: 'https://www.youtube.com/watch?v=5HzLKcJPV14',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-119': {
    link: 'https://www.youtube.com/watch?v=txDPAtNPixE https://www.youtube.com/watch?v=oi1WYMPQuKE',
    source: 'Suisei and Miko official YouTube original streams',
  },
  'c2-2025-131': {
    link: 'https://www.youtube.com/watch?v=sNhmjGRjpT0',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-136': {
    link: 'https://www.youtube.com/watch?v=SFgbZD3fcSA https://www.youtube.com/watch?v=6nT1uh2UCPg',
    source: 'Miko official YouTube original streams',
  },
  'c2-2025-137': {
    link: 'https://www.youtube.com/watch?v=gc1WDFZX2rc',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-139': {
    link: 'https://www.youtube.com/watch?v=u8HQOTddXeE',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-140': {
    link: 'https://www.youtube.com/watch?v=u8HQOTddXeE',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-141': {
    link: 'https://www.youtube.com/watch?v=nSs9E_Zqpps',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-157': {
    link: 'https://www.youtube.com/watch?v=7VMY4xcxeHM',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-161': {
    link: 'https://www.youtube.com/watch?v=DFgNuqSCLc0',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-165': {
    link: 'https://www.youtube.com/watch?v=7SF91hrOiD4',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-169': {
    link: 'https://www.youtube.com/watch?v=4zz8mG7615s',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-193': {
    link: 'https://www.youtube.com/watch?v=_5Lj_Sr1QEc',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-194': {
    link: 'https://www.youtube.com/watch?v=3iNXXJQ5BBw',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-201': {
    link: 'https://www.youtube.com/watch?v=35p_v2E-CZE',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-226': {
    link: 'https://www.youtube.com/watch?v=G9VLv6slxvo',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-217': {
    link: 'https://www.youtube.com/watch?v=cavEH1e-rDQ',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-251': {
    link: 'https://www.youtube.com/watch?v=Vzaqp2_drL4',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-283': {
    link: 'https://www.youtube.com/watch?v=Ccgrkvk5W7o',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-267': {
    link: 'https://www.youtube.com/watch?v=qSF5Js1IZnU',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-292': {
    link: 'https://www.youtube.com/watch?v=ADDLk04SWiM',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-306': {
    link: 'https://www.youtube.com/watch?v=h38Fnb6KuC0 https://www.youtube.com/watch?v=SdBz_WuB50w',
    source: 'Miko and Suisei official YouTube original streams',
  },
  'c2-2025-315': {
    link: 'https://www.youtube.com/watch?v=E_MsO2AzNWE',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-055': {
    link: 'https://www.youtube.com/watch?v=mh9w_R_2TaI https://www.youtube.com/watch?v=Jz2SeJDfml8',
    source: 'Suisei official YouTube original stream / Miko official Lollipop MV',
  },
  'c2-2025-302': {
    link: 'https://www.youtube.com/watch?v=HnVda5y3yN0',
    source: 'Miko official YouTube',
  },
  'c2-2025-159': {
    link: 'https://www.youtube.com/watch?v=R5Lk7lxXkB4',
    source: 'Miko official YouTube',
  },
  'c2-2025-125': {
    link: 'https://www.youtube.com/watch?v=hCBnmwS85JQ https://www.youtube.com/watch?v=67bX0QLtHho',
    source: 'Miko and Suisei official YouTube',
  },
  'c2-2025-103': {
    link: 'https://www.youtube.com/watch?v=ZL9WK6WjvQs',
    source: 'Miko official YouTube',
  },
  'c2-2025-096': {
    link: 'https://www.youtube.com/watch?v=EQ0O_laF7i8 https://www.youtube.com/watch?v=97vYOZfHWCg',
    source: 'Miko and Suisei official YouTube',
  },
  'c2-2025-059': {
    link: 'https://www.youtube.com/watch?v=unn-ToRVk0k',
    source: 'Miko official YouTube',
  },
  'c2-2025-321': {
    link: 'https://www.youtube.com/watch?v=juUyoCw_RSU https://www.youtube.com/watch?v=jD_pU61Xub4 https://www.youtube.com/watch?v=6vWDW8Vgi-I',
    source: 'Miko, Suisei and Fubuki official YouTube',
  },
  'c2-2025-054': {
    link: 'https://www.youtube.com/watch?v=hzLWva-Igt0',
    source: 'Miko official YouTube',
  },
  'c2-2025-318': {
    link: 'https://kai-you.net/article/93532',
    source: 'KAI-YOU news report',
  },
  'c2-2025-319': {
    link: 'https://hololive.hololivepro.com/music/650/ https://www.youtube.com/watch?v=Jz2SeJDfml8',
    source: 'hololive official music page / Miko official YouTube MV',
  },
  'c2-2025-320': {
    link: 'https://shop.hololivepro.com/products/micomet_newoutfit_2025',
    source: 'hololive production official shop',
  },
  'c2-2025-231': {
    link: 'https://hololive.hololivepro.com/news/20250313-02-72/',
    source: 'hololive 6th fes. official DAY2 report',
  },
  'c2-2025-268': {
    link: 'https://hololive.hololivepro.com/events/fbkingdom_live/',
    source: 'hololive official FBKINGDOM ANTHEM report',
  },

  'c2-2025-316': {
    link: 'https://www.youtube.com/watch?v=wlEZTKubQH8',
    source: 'MikoKorone official YouTube MV',
  },
  'c2-2025-314': {
    link: 'https://www.youtube.com/watch?v=23_0IR4b48U',
    source: 'Ao official YouTube original stream',
  },
  'c2-2025-313': {
    link: 'https://www.youtube.com/watch?v=hUbFoEW93QU',
    source: 'Towa official YouTube original stream',
  },
  'c2-2025-299': {
    link: 'https://www.youtube.com/watch?v=BC41cbquSVg',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-223': {
    link: 'https://www.youtube.com/watch?v=K_na4Akrttg',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-256': {
    link: 'https://www.youtube.com/watch?v=QZBOzpr7ABg',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-208': {
    link: 'https://www.youtube.com/watch?v=iISIcvYS67c',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-209': {
    link: 'https://www.youtube.com/watch?v=2LDhfEcrq5o',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-218': {
    link: 'https://www.youtube.com/watch?v=lWESBbpBclU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-225': {
    link: 'https://www.youtube.com/watch?v=VzGNuQHy5rk',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-240': {
    link: 'https://www.youtube.com/watch?v=wRnwjqmgwEA',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-245': {
    link: 'https://www.youtube.com/watch?v=CsdIz2Ql5zA',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-263': {
    link: 'https://www.youtube.com/watch?v=gkC1hcVgdPE',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-288': {
    link: 'https://www.youtube.com/watch?v=wATqcMpd9bQ',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-290': {
    link: 'https://www.youtube.com/watch?v=K9IccjZT6uE',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-296': {
    link: 'https://www.youtube.com/watch?v=W7hCj5B7ACQ',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-160': {
    link: 'https://www.youtube.com/watch?v=7xyrj2D6Xfk',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-168': {
    link: 'https://www.youtube.com/watch?v=K-O4Xi6ipnk',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-189': {
    link: 'https://www.youtube.com/watch?v=pCwgytSgT4Q',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-190': {
    link: 'https://www.youtube.com/watch?v=0N0mSXkvNSY',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-204': {
    link: 'https://www.youtube.com/watch?v=wM0A1aiIPpY',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-060': {
    link: 'https://www.youtube.com/watch?v=DShOfmHKIq4',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-064': {
    link: 'https://www.youtube.com/watch?v=Uf5IPItH1vQ',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-067': {
    link: 'https://www.youtube.com/watch?v=tPwEyBuFp6Q',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-074': {
    link: 'https://www.youtube.com/watch?v=6y_pKqg6IxI',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-075': {
    link: 'https://www.youtube.com/watch?v=6y_pKqg6IxI',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-076': {
    link: 'https://www.youtube.com/watch?v=HPKW-iU3Eds',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-094': {
    link: 'https://www.youtube.com/watch?v=TBu1JUErkMY',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-105': {
    link: 'https://www.youtube.com/watch?v=gUO6xWeKu2Y',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-107': {
    link: 'https://www.youtube.com/watch?v=OHXmXlPFhZI',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-109': {
    link: 'https://www.youtube.com/watch?v=DwGvCtIOtQY',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-110': {
    link: 'https://www.youtube.com/watch?v=cLHhLVFd0Oc',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-124': {
    link: 'https://www.youtube.com/watch?v=txDPAtNPixE',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-005': {
    link: 'https://www.youtube.com/watch?v=Jk5Wh-MkM60',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-007': {
    link: 'https://www.youtube.com/watch?v=LeIfZ2wGP7s',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-011': {
    link: 'https://www.youtube.com/watch?v=sB5A9mFEO9Y',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-012': {
    link: 'https://www.youtube.com/watch?v=tBATZsxSb1g',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-018': {
    link: 'https://www.youtube.com/watch?v=DhPf_ob5dPY',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-022': {
    link: 'https://www.youtube.com/watch?v=_PmTRVOHW3U',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-026': {
    link: 'https://www.youtube.com/watch?v=MsJmGwqU--A',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-027': {
    link: 'https://www.youtube.com/watch?v=Ddcoq6USQjw',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-032': {
    link: 'https://www.youtube.com/watch?v=GxXpkps21Kc',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-035': {
    link: 'https://www.youtube.com/watch?v=PMOLxiIbX0g',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-039': {
    link: 'https://www.youtube.com/watch?v=SYeAXSpBtrY',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-042': {
    link: 'https://www.youtube.com/watch?v=0Lyo6TqXfA4',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-043': {
    link: 'https://www.youtube.com/watch?v=WNUJdRsBi1o',
    source: 'Suisei official YouTube original stream',
  },
  'c2-2025-301': {
    link: 'https://www.youtube.com/watch?v=FOk-T8rwouU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-084': {
    link: 'https://www.youtube.com/watch?v=J6QC95ewUFg',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-088': {
    link: 'https://www.youtube.com/watch?v=NtkoCL2zjJ0',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-019': {
    link: 'https://www.youtube.com/watch?v=F-S7Ljothe8',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-034': {
    link: 'https://www.youtube.com/watch?v=kfhwIJKgVBA https://www.youtube.com/watch?v=oslNxV_8Q2c',
    source: 'Miko official YouTube original streams',
  },
  'c2-2025-040': {
    link: 'https://www.youtube.com/watch?v=VJm12Ztekgo',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-013': {
    link: 'https://www.youtube.com/watch?v=yu_xI7OeCkM https://www.youtube.com/watch?v=nhpUFMUa9V4',
    source: 'Miko official YouTube original streams',
  },
  'c2-2025-095': {
    link: 'https://www.youtube.com/watch?v=hgXz_J9q9lg',
    source: 'Lui official YouTube original stream',
  },
  'c2-2025-104': {
    link: 'https://www.youtube.com/watch?v=3jRfYyHxvws',
    source: 'Subaru official YouTube original stream',
  },
  'c2-2025-033': {
    link: 'https://www.youtube.com/watch?v=Pzqzy2ZIcLI',
    source: 'Iroha official YouTube original stream',
  },
  'c2-2025-176': {
    link: 'https://www.youtube.com/watch?v=WBWtCSQiK34',
    source: 'Lui official YouTube original stream',
  },
  'c2-2025-097': {
    link: 'https://www.youtube.com/watch?v=K307EPq4MBE',
    source: 'Kanata official YouTube original stream',
  },
  'c2-2025-001': {
    link: 'https://www.youtube.com/watch?v=jtU-KcAoRZw',
    source: 'Fubuki official YouTube original stream',
  },
  'c2-2025-117': {
    link: 'https://x.com/suisei_hosimati/status/1945488161486102632',
    source: 'Suisei official X post',
  },
  'c2-2025-250': {
    link: 'https://www.youtube.com/shorts/fugWorfBYF0',
    source: 'Suisei official YouTube Short',
  },
  'c2-2025-166': {
    link: 'https://www.youtube.com/shorts/Bpsi9wTFZJY',
    source: 'Suisei official YouTube Short',
  },
  'c2-2025-273': {
    link: 'https://www.youtube.com/watch?v=kh_UEsCJ4oM',
    source: 'Hajime official YouTube original stream',
  },
  'c2-2025-221': {
    link: 'https://www.youtube.com/watch?v=aASVW-khiXw',
    source: 'AZKi official YouTube original stream',
  },
  'c2-2025-236': {
    link: 'https://www.youtube.com/watch?v=044_F3TIwbE',
    source: 'Okayu official YouTube original stream',
  },
  'c2-2025-212': {
    link: 'https://www.youtube.com/watch?v=WSKrhkgRNOI',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-244': {
    link: 'https://www.youtube.com/watch?v=11hUlAq5KrI',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-230': {
    link: 'https://www.youtube.com/watch?v=pIzg1mlrU1w',
    source: 'Iroha official YouTube original stream',
  },
  'c2-2025-246': {
    link: 'https://www.youtube.com/watch?v=Qb2oP5-TDTA',
    source: 'Subaru official YouTube original stream',
  },
  'c2-2025-272': {
    link: 'https://www.youtube.com/watch?v=aOhEhm_MOzI',
    source: 'Fubuki official YouTube original stream',
  },
  'c2-2025-289': {
    link: 'https://www.youtube.com/watch?v=f0ppejzKils',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-293': {
    link: 'https://www.youtube.com/watch?v=Lsivt1Wll8U',
    source: 'Kanade official YouTube original stream',
  },
  'c2-2025-150': {
    link: 'https://www.youtube.com/watch?v=u050lW9xyiU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-155': {
    link: 'https://www.youtube.com/watch?v=FV2Z3bCqx9o',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-185': {
    link: 'https://www.youtube.com/watch?v=D2Ki2BjqedU',
    source: 'Miko official YouTube original stream',
  },
  'c2-2025-196': {
    link: 'https://www.youtube.com/watch?v=jS3BvDn2gV0',
    source: 'Fubuki official YouTube original stream',
  },
  'c2-2025-215': {
    link: 'https://www.nhk.jp/p/venue101/ts/WX1N9WR8GY/blog/bl/p7x4Gzaqg7/bp/p9la2gYjDK/',
    source: 'NHK official Venue101 VTuber Special page',
  },
  'c2-2025-175': {
    link: 'https://radiko.jp/mobile/events/12420209',
    source: 'radiko official NHK 第89回 program listing',
  },
};

const classificationOverrides2025: Record<string, {
  side?: Side;
  sharedCategory?: 'gen0' | 'shiraken' | 'oneOnOne' | 'group';
  reciprocal?: boolean;
  supportCategory?: 'fubuki';
  emoji?: string;
}> = {
  'c2-2025-159': { side: 'shared', sharedCategory: 'group', emoji: '💛' },
  'c2-2025-041': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-047': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-319': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-320': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-059': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-125': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-214': { side: 'shared', sharedCategory: 'oneOnOne', reciprocal: true, emoji: '💛' },
  'c2-2025-069': { side: 'miko', emoji: '🌸' },
  'c2-2025-116': { side: 'shared', sharedCategory: 'gen0', emoji: '💛' },
};

const data = rows.split('\n').map((row) => {
  const [id, displayId, date, phase, side, emoji, type, rawTitle] = row.split('|');
  const titleZh = cleanTitle(rawTitle).trim();
  const titleEn = nextEnglishTitle(date, titleZh);
  const ctxZh = `${titleZh}。`;
  const ctxEn = `${date.replace(/-/g, '/')}, ${titleEn}.`;
  const classification = classificationOverrides2025[id] || {};
  return {
    id,
    displayId,
    date,
    phase: Number(phase),
    side: classification.side ?? (side as Side),
    emoji: classification.emoji ?? emoji,
    title: titleEn,
    titleZh,
    titleEn,
    ctx: ctxEn,
    ctxZh,
    ctxEn,
    type,
    link: verifiedSourceLinks2025[id]?.link ?? '',
    source: verifiedSourceLinks2025[id]?.source ?? 'MiComet Compendium II',
    ...(classification.sharedCategory ? { sharedCategory: classification.sharedCategory } : {}),
    ...(classification.reciprocal ? { reciprocal: true } : {}),
    ...(classification.supportCategory ? { supportCategory: classification.supportCategory } : {}),
  };
});

export default data;
