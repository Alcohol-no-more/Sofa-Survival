// questions.js
const allQuestions = [
    // --- 第一類：視覺陷阱 (Visual Traps) ---
    {
        s: {
            zh: "「我今日有咩唔同呀？」<br><span style='font-size:0.5em'>(暗示：佢整咗指甲)</span>",
            en: "“Notice anything different about me today?”<br><span style='font-size:0.5em'>(Hint: She got her nails done.)</span>"
        },
        o: {
            zh: ["剪左頭髮", "換左耳環", "整左指甲", "瘦左"],
            en: ["You cut your hair", "New earrings?", "You got your nails done", "You look thinner"]
        },
        a: 2,
        f: {
            zh: "你對眼係咪攞嚟擺？咁大對手喺你面前都睇唔到？",
            en: "Are your eyes just decorative? Her hands were right in front of your face and you still missed it?"
        }
    },
    {
        s: {
            zh: "「呢件衫好似顯得我好肥...」",
            en: "“This outfit kinda makes me look fat...”"
        },
        o: {
            zh: ["唔肥呀", "妳瘦咗先真", "（即刻攞另一件畀佢）", "少少啦，但幾好睇"],
            en: ["No, not at all", "You’ve actually gotten slimmer", "（Immediately hands her another outfit）", "Maybe a little, but it still looks nice"]
        },
        a: 2,
        f: {
            zh: "答『唔肥』太假，答『少少』係自殺。唯有行動先係真誠。",
            en: "Saying 'not fat' sounds fake. Saying 'a little' is basically assisted suicide. Only action counts as sincerity."
        }
    },
    {
        s: {
            zh: "佢試緊件一模一樣嘅裙：<br>「呢件同我屋企嗰件係咪好唔同？」",
            en: "She’s trying on a dress that looks exactly like one she already owns:<br>“This one’s totally different from the one I have at home, right?”"
        },
        o: {
            zh: ["直覺話：一模一樣", "呢件顯得妳高啲", "屋企嗰件深色少少", "妳鍾意就買啦"],
            en: ["Honestly? It’s exactly the same", "This one makes you look taller", "The one at home is a bit darker", "If you like it, just buy it"]
        },
        a: 1,
        f: {
            zh: "講事實係直男癌，話買啦係敷衍。要講出『根本不存在』嘅優點。",
            en: "Stating facts is peak clueless boyfriend behavior. Saying 'just buy it' is lazy. You need to invent an advantage that doesn’t even exist."
        }
    },
    {
        s: {
            zh: "「我同呢張相入面個女仔，邊個靚啲？」",
            en: "“Between me and the girl in this photo, who’s prettier?”"
        },
        o: {
            zh: ["梗係妳啦", "各有各靚", "邊個嚟架？完全冇留意", "佢化妝濃得滯"],
            en: ["Obviously you", "You’re both pretty in different ways", "Who’s that? I didn’t even notice her", "Her makeup is way too heavy"]
        },
        a: 2,
        f: {
            zh: "只要你望咗個女仔超過一秒，你就已經輸咗。",
            en: "The moment you looked at that other girl for more than one second, you already lost."
        }
    },
    {
        s: {
            zh: "「我素顏係咪好殘？」",
            en: "“Do I look terrible without makeup?”"
        },
        o: {
            zh: ["唔會，好清純", "係有少少黑眼圈", "妳化唔化妝都咁靚", "早啲訓就得啦"],
            en: ["Not at all, you look fresh and innocent", "You do have a bit of dark circles", "You look beautiful with or without makeup", "Just sleep earlier"]
        },
        a: 0,
        f: {
            zh: "『化唔化妝都咁靚』太行貨，佢要聽嘅係具體嘅讚美。",
            en: "'Beautiful with or without makeup' is too generic. She wants a specific compliment, not a copy-paste line."
        }
    },

    // --- 第二類：送命回憶錄 (Memory Stress Test) ---
    {
        s: {
            zh: "「你記唔記得今日係咩日子？」",
            en: "“Do you remember what day it is today?”"
        },
        o: {
            zh: ["我哋拍拖一週年", "第一次睇戲嘅日子", "妳生日？", "（冷靜地拎出禮物）"],
            en: ["Our one-year anniversary", "The day we first went to the movies", "Your birthday?", "（Calmly pulls out a gift）"]
        },
        a: 3,
        f: {
            zh: "講錯日子係死罪，唔記得係極刑。唯有物資補償可以救你。",
            en: "Getting the date wrong is a capital offense. Forgetting completely is a public execution. Only material compensation might save you."
        }
    },
    {
        s: {
            zh: "「我上次同你講過嗰件事呢...」<br><span style='font-size:0.5em'>(其實你根本冇聽)</span>",
            en: "“That thing I told you about last time...”<br><span style='font-size:0.5em'>(You absolutely did not listen.)</span>"
        },
        o: {
            zh: ["邊件事話？", "哦！嗰件事呀嘛...", "（扮聽電話）", "妳講邊個朋友嗰件事？"],
            en: ["Which thing?", "Oh! That thing, yeah...", "（Pretends to answer a phone call）", "Which friend was it about again?"]
        },
        a: 1,
        f: {
            zh: "誠實唔係美德。你要扮到好似聽過，再引導佢講多次。",
            en: "Honesty is not a virtue here. Pretend you heard it before, then skillfully guide her into repeating it."
        }
    },
    {
        s: {
            zh: "「我最鍾意食咩色嘅馬卡龍？」",
            en: "“What color macarons do I like most?”"
        },
        o: {
            zh: ["粉紅色", "開心果綠", "隻隻都鍾意", "妳唔食馬卡龍架喎"],
            en: ["Pink", "Pistachio green", "You like all of them", "You don’t even eat macarons"]
        },
        a: 3,
        f: {
            zh: "記錯喜好代表你根本冇心。但如果佢根本唔食，呢題就係心理戰。",
            en: "Getting her preferences wrong means you clearly weren’t paying attention. But if she doesn’t even eat macarons, congrats: this was psychological warfare."
        }
    },
    {
        s: {
            zh: "「你記唔記得我哋第一次約會著咩衫？」",
            en: "“Do you remember what I wore on our first date?”"
        },
        o: {
            zh: ["妳著白色裙", "我著藍色恤衫", "唔係好記得細節", "（描述一個根本冇發生過嘅畫面）"],
            en: ["You wore a white dress", "I wore a blue shirt", "I don’t really remember the details", "（Describes a scene that never happened）"]
        },
        a: 0,
        f: {
            zh: "呢題係死題，記唔住就係唔愛。",
            en: "This is a dead-end question. If you don’t remember, clearly you 'don’t love her enough.'"
        }
    },
    {
        s: {
            zh: "「我之前話想去嗰間餐廳叫咩名？」",
            en: "“What was the name of that restaurant I said I wanted to try?”"
        },
        o: {
            zh: ["Openrice 搵下", "嗰間日本嘢？", "（直接報出餐廳名）", "下次先去啦"],
            en: ["Let me check Yelp", "That Japanese place?", "（Immediately says the restaurant name）", "Let’s go another time"]
        },
        a: 2,
        f: {
            zh: "連食乜都唔記得，你仲話想同佢有未來？",
            en: "If you can’t even remember what she wanted to eat, how are you planning a future together?"
        }
    },

    // --- 第三類：前度地雷 (Ex-files) ---
    {
        s: {
            zh: "「如果你前女友搵你借錢，你會點？」",
            en: "“If your ex asked to borrow money, what would you do?”"
        },
        o: {
            zh: ["借，佢可能有急事", "唔借，死開啦", "問妳借唔借得", "唔回應，直接封鎖"],
            en: ["Lend it, maybe she’s in trouble", "No way, tell her to get lost", "Ask you first", "Ignore her and block her immediately"]
        },
        a: 3,
        f: {
            zh: "任何形式嘅溝通都係復燃嘅火種。封鎖係唯一答案。",
            en: "Any form of communication is just a spark waiting to reignite. Blocking is the only acceptable answer."
        }
    },
    {
        s: {
            zh: "「你覺得我同你前度邊個溫柔啲？」",
            en: "“Who’s more gentle, me or your ex?”"
        },
        o: {
            zh: ["梗係妳啦", "佢比較暴躁", "我都唔記得佢係點", "每個人性格唔同"],
            en: ["Obviously you", "She was more short-tempered", "I barely even remember what she was like", "Everyone has a different personality"]
        },
        a: 2,
        f: {
            zh: "唔好比較，因為比較代表你仲有回憶。",
            en: "Never compare. The fact that you can compare means the memories are still alive."
        }
    },
    {
        s: {
            zh: "「你仲留住佢啲相做咩？」<br><span style='font-size:0.5em'>(其實你只係廢事執)</span>",
            en: "“Why are you still keeping her photos?”<br><span style='font-size:0.5em'>(You were just too lazy to delete them.)</span>"
        },
        o: {
            zh: ["回憶嚟啫", "我唔記得刪", "（當面刪除）", "我冇留過"],
            en: ["They’re just memories", "I forgot to delete them", "（Deletes them on the spot）", "I never kept them"]
        },
        a: 2,
        f: {
            zh: "解釋即係掩飾，刪除先係態度。",
            en: "Explaining looks like hiding. Deleting them is the only attitude that counts."
        }
    },
    {
        s: {
            zh: "「如果你前度結婚，你會唔會去？」",
            en: "“If your ex got married, would you go to the wedding?”"
        },
        o: {
            zh: ["去，我大方嘛", "唔去，冇興趣", "妳陪我咪去囉", "唔知呢"],
            en: ["Yeah, I’m mature about it", "No, not interested", "If you come with me, then sure", "Not sure"]
        },
        a: 1,
        f: {
            zh: "去？你想去搶婚定去懷念？",
            en: "Go? Are you planning to object at the altar or just relive old memories?"
        }
    },
    {
        s: {
            zh: "「你覺得我邊忽似佢？」",
            en: "“What part of me reminds you of her?”"
        },
        o: {
            zh: ["完全唔似", "性格掛", "一樣咁靚", "（沈默）"],
            en: ["Not even remotely", "Maybe your personality", "You’re both beautiful", "（Silence）"]
        },
        a: 0,
        f: {
            zh: "只要你講出一點相似，你今晚就準備瞓梳化。",
            en: "The second you name even one similarity, get ready to sleep on the couch tonight."
        }
    },

    // --- 第四類：通訊軟體 (Messaging Madness) ---
    {
        s: {
            zh: "「點解你睇咗我 Story 但唔覆我 WhatsApp？」",
            en: "“Why did you watch my Story but not reply to my message?”"
        },
        o: {
            zh: ["忙緊囉", "睇完唔記得咗", "唔知覆咩好", "我想見到妳先講"],
            en: ["I was busy", "I saw it and forgot", "I didn’t know what to say", "I wanted to tell you in person"]
        },
        a: 3,
        f: {
            zh: "忙？忙到可以睇 Story 唔可以覆機？",
            en: "Busy? Busy enough to watch her Story, but not enough to reply?"
        }
    },
    {
        s: {
            zh: "「你啱啱同邊個傾電話傾咁耐？」",
            en: "“Who were you on the phone with for that long just now?”"
        },
        o: {
            zh: ["同事講公事", "我阿媽", "（Show 通話紀錄）", "唔好咁多疑啦"],
            en: ["A coworker, work stuff", "My mom", "（Shows call log）", "Don’t be so suspicious"]
        },
        a: 2,
        f: {
            zh: "口講無憑，真相最重要。雖然咁樣好卑微。",
            en: "Words mean nothing. Evidence is everything. Yes, it’s a little pathetic."
        }
    },
    {
        s: {
            zh: "「點解你咁遲先覆我？」<br><span style='font-size:0.5em'>(其實只係過咗5分鐘)</span>",
            en: "“Why did you take so long to reply?”<br><span style='font-size:0.5em'>(It’s only been 5 minutes.)</span>"
        },
        o: {
            zh: ["打緊機", "沖緊涼", "（秒覆：掛住妳掛到發呆）", "sorry 囉"],
            en: ["I was gaming", "I was in the shower", "（Instant reply: I was spacing out because I missed you）", "Sorry?"]
        },
        a: 2,
        f: {
            zh: "5分鐘對女人嚟講係一個世紀。請提供情緒價值。",
            en: "To her, five minutes is an entire century. Please provide emotional value."
        }
    },
    {
        s: {
            zh: "「點解你唔 Like 我張相？」",
            en: "“Why didn’t you like my photo?”"
        },
        o: {
            zh: ["未睇到", "以為 Like 咗", "張相影得唔係幾好", "我想留言多過 Like"],
            en: ["I didn’t see it", "I thought I already did", "The photo wasn’t that great", "I wanted to comment instead of just liking it"]
        },
        a: 3,
        f: {
            zh: "唔 Like 張相即係否定佢嘅存在感。",
            en: "Not liking the photo is basically denying her existence."
        }
    },
    {
        s: {
            zh: "「點解你 WhatsApp 唔打 Emoji？」",
            en: "“Why don’t you use emojis when you text me?”"
        },
        o: {
            zh: ["我懶", "好幼稚", "我驚妳誤會我語氣", "（加返10個心心）"],
            en: ["I’m lazy", "They’re childish", "I don’t want you to misunderstand my tone", "（Adds 10 heart emojis immediately）"]
        },
        a: 3,
        f: {
            zh: "冇 Emoji 嘅文字係冷冰冰嘅暴力。",
            en: "Text without emojis is cold, emotionless violence."
        }
    },

    // --- 第五類：生活細節 (Daily Drama) ---
    {
        s: {
            zh: "「我今日想食乜，你估下？」",
            en: "“Guess what I feel like eating today?”"
        },
        o: {
            zh: ["譚仔", "壽司", "妳想食嗰間新開嘅 Cafe", "隨便啦"],
            en: ["TamJai", "Sushi", "That new café you wanted to try", "Whatever"]
        },
        a: 2,
        f: {
            zh: "估唔到即係唔了解。講『隨便』直頭係挑釁。",
            en: "If you can’t guess, clearly you don’t know her. Saying 'whatever' is outright provocation."
        }
    },
    {
        s: {
            zh: "「你覺唔覺得我最近黑咗？」",
            en: "“Do you think I’ve gotten darker lately?”"
        },
        o: {
            zh: ["係喎，去完沙灘嘛", "完全冇，仲好白", "黑咗仲健康", "黑白我都愛"],
            en: ["Yeah, after the beach", "Not at all, you’re still super fair", "A little tan looks healthier", "I love you tan or fair"]
        },
        a: 1,
        f: {
            zh: "女人對『黑』同『肥』一樣敏感。請否定事實。",
            en: "To her, 'darker' is as dangerous as 'fatter.' Please deny reality."
        }
    },
    {
        s: {
            zh: "「如果你中咗六合彩，第一件事會買咩畀我？」",
            en: "“If you won the lottery, what’s the first thing you’d buy for me?”"
        },
        o: {
            zh: ["買樓", "買鑽戒", "全部錢交畀妳", "買車"],
            en: ["A house", "A diamond ring", "I’d hand all the money to you", "A car"]
        },
        a: 2,
        f: {
            zh: "買乜都唔夠『交出財政大權』咁有誠意。",
            en: "Nothing says devotion like surrendering financial control."
        }
    },
    {
        s: {
            zh: "「如果你生女，想佢似邊個？」",
            en: "“If we had a daughter, who would you want her to take after?”"
        },
        o: {
            zh: ["似我多啲", "似妳多啲", "似妳咁靚", "似我咁聰明"],
            en: ["More like me", "More like you", "As beautiful as you", "As smart as me"]
        },
        a: 2,
        f: {
            zh: "讚美要不經意。似妳咁靚係標準答案。",
            en: "The best compliments sound effortless. 'As beautiful as you' is the gold standard."
        }
    },
    {
        s: {
            zh: "「你覺唔覺得我好煩？」",
            en: "“Do you think I’m annoying?”"
        },
        o: {
            zh: ["係有少少", "唔會，我鍾意聽妳講嘢", "（轉身錫佢一啖）", "煩但我愛妳"],
            en: ["A little", "Not at all, I like listening to you", "（Turns around and kisses her）", "Annoying, but I love you"]
        },
        a: 2,
        f: {
            zh: "語言係蒼白嘅。用行動終止呢個話題。",
            en: "Words are weak. End the conversation with action."
        }
    },

    // --- 第六類：極端悖論 (Paradoxes) ---
    {
        s: {
            zh: "「如果我消失咗，你會唔會搵返我？」",
            en: "“If I disappeared, would you come find me?”"
        },
        o: {
            zh: ["會，搵到天荒地老", "會，報警囉", "唔會，因為妳一直喺我心入面", "（保持沈默 10 秒）"],
            en: ["Yes, I’d search till the end of time", "Yeah, I’d call the police", "No, because you’d still be in my heart", "（Stays silent for 10 seconds）"]
        },
        a: 0,
        f: {
            zh: "猶豫就係唔想搵。請立刻發誓。",
            en: "Hesitation means you never wanted to look. Swear eternal devotion immediately."
        }
    },
    {
        s: {
            zh: "「你愛我定愛你阿媽？」",
            en: "“Who do you love more, me or your mom?”"
        },
        o: {
            zh: ["阿媽", "妳", "兩個都愛", "唔同嘅愛"],
            en: ["My mom", "You", "I love both", "It’s a different kind of love"]
        },
        a: 1,
        f: {
            zh: "這題是沒有人性的題目，但你必須選生存。",
            en: "This question has no humanity in it, but survival demands a choice."
        }
    },
    {
        s: {
            zh: "「如果我變咗一條蟲，你仲愛唔愛我？」",
            en: "“If I turned into a worm, would you still love me?”"
        },
        o: {
            zh: ["愛", "會養妳一世", "我都會變埋做蟲", "點解會變蟲？"],
            en: ["Yes", "I’d take care of you forever", "I’d become a worm too", "Why would you turn into a worm?"]
        },
        a: 2,
        f: {
            zh: "邏輯係愛情嘅敵人。浪漫嘅荒謬先係唯一出路。",
            en: "Logic is the enemy of love. Romantic absurdity is the only way out."
        }
    },
    {
        s: {
            zh: "「你覺得我今日化妝係咪濃得滯？」",
            en: "“Do you think my makeup is too heavy today?”"
        },
        o: {
            zh: ["係，淡妝好啲", "唔係，好有女神 feel", "妳化乜都好睇", "（深情凝視：我只見到妳雙眼）"],
            en: ["Yeah, lighter makeup looks better", "No, you look like a goddess", "You look good no matter what", "（Stares deeply: I only see your eyes）"]
        },
        a: 3,
        f: {
            zh: "唔好評價化妝，評價佢對眼。",
            en: "Don’t evaluate the makeup. Compliment the eyes."
        }
    },
    {
        s: {
            zh: "「如果你可以揀，你會唔會想識過第二個女仔？」",
            en: "“If you had the choice, would you want to meet someone else instead?”"
        },
        o: {
            zh: ["會，想識個溫柔啲嘅", "唔會，妳係唯一", "可能啦", "如果嗰個係妳嘅下輩子"],
            en: ["Yeah, maybe someone gentler", "No, you’re the only one", "Maybe", "Only if it was you in your next life"]
        },
        a: 3,
        f: {
            zh: "單純講唔會太假。要講到下輩子先夠力。",
            en: "A plain 'no' feels fake. You need to bring reincarnation into this."
        }
    },

    // --- 第七類：打機/嗜好篇 (Gaming & Hobbies) ---
    {
        s: {
            zh: "你打緊機（決賽周），佢話：<br>「陪我睇呢個片先。」",
            en: "You’re in the middle of a game (ranked match, final round), and she says:<br>“Watch this video with me first.”"
        },
        o: {
            zh: ["打完呢場先", "（立刻放低手掣）", "妳自己睇住先", "等我死咗先"],
            en: ["Let me finish this round first", "（Puts the controller down immediately）", "Watch it yourself first", "Wait till I die in-game"]
        },
        a: 1,
        f: {
            zh: "『打埋呢場』係分手嘅導火線。手掣可以再買，條命得一條。",
            en: "'Let me finish this round' is how breakups begin. Controllers can be replaced. Your life cannot."
        }
    },
    {
        s: {
            zh: "「你鍾意打機多啲定鍾意我多啲？」",
            en: "“Do you like gaming more, or me?”"
        },
        o: {
            zh: ["梗係妳啦", "兩樣嘢冇得比", "打機係放鬆，妳係生命", "（沈默，繼續打）"],
            en: ["Obviously you", "Those two things aren’t comparable", "Gaming is relaxation. You are life itself.", "（Says nothing and keeps playing）"]
        },
        a: 2,
        f: {
            zh: "『梗係妳』太假。要賦予佢一個至高無上嘅地位。",
            en: "'Obviously you' is too cheap. You need to place her on a higher plane of existence."
        }
    },
    {
        s: {
            zh: "佢見到你買咗部 PS5：<br>「幾錢呀？係咪好貴？」",
            en: "She sees you bought a PS5:<br>“How much was that? Was it expensive?”"
        },
        o: {
            zh: ["朋友送嘅", "公司抽獎中", "特價 $1999", "買畀妳睇 Netflix 用"],
            en: ["A friend gave it to me", "I won it in a company raffle", "It was on sale for $1999", "I bought it so you can watch Netflix on it"]
        },
        a: 3,
        f: {
            zh: "報細數會被踢爆，話朋友送太可疑。唯有將佢轉化為『為妳服務』嘅工具。",
            en: "Lowballing the price will get exposed. Saying a friend gifted it is suspicious. The only move is to rebrand it as a device that serves her."
        }
    },
    {
        s: {
            zh: "「點解你同個女仔隊友玩得咁開心？」",
            en: "“Why are you having so much fun playing with that girl teammate?”"
        },
        o: {
            zh: ["佢好勁呀", "隨機 Match 咋", "（即刻踢走個女仔）", "我都唔識佢"],
            en: ["She’s really good", "It was just a random match", "（Kicks the girl teammate immediately）", "I don’t even know her"]
        },
        a: 2,
        f: {
            zh: "解釋係冇用嘅。行動先可以證明你嘅清白。",
            en: "Explanations are useless. Only action can prove your innocence."
        }
    },
    {
        s: {
            zh: "「如果你打機贏咗 10 萬，會點用？」",
            en: "“If you won 100K from gaming, what would you do with it?”"
        },
        o: {
            zh: ["換張靚顯示卡", "帶妳去歐洲旅行", "存入聯名戶口", "買多部主機畀妳"],
            en: ["Upgrade my graphics card", "Take you on a Europe trip", "Put it into our joint account", "Buy you another console"]
        },
        a: 1,
        f: {
            zh: "錢可以再賺，旅行係換取未來三個月和平嘅門票。",
            en: "Money can be earned again. A vacation is a ticket to three months of peace."
        }
    },

    // --- 第八類：旅行/出門篇 (Travel & Outing) ---
    {
        s: {
            zh: "去日本旅行，佢問：<br>「聽日去邊呀？」",
            en: "On a trip to Japan, she asks:<br>“Where are we going tomorrow?”"
        },
        o: {
            zh: ["隨便妳啦", "我都唔知，睇下點", "（拎出 15 頁 PDF 行程表）", "妳話事"],
            en: ["Whatever you want", "I’m not sure, we’ll figure it out", "（Pulls out a 15-page PDF itinerary）", "You decide"]
        },
        a: 2,
        f: {
            zh: "『隨便』等同於『我根本唔在乎呢個旅程』。PDF 係最浪漫嘅情書。",
            en: "'Whatever' translates to 'I don't care about this trip at all.' A PDF itinerary is the most romantic love letter."
        }
    },
    {
        s: {
            zh: "佢喺藥妝店行咗兩小時，問：<br>「你會唔會好悶？」",
            en: "She’s been in a drugstore for two hours and asks:<br>“Are you bored?”"
        },
        o: {
            zh: ["係有少少", "唔悶，睇妳買嘢好開心", "我喺門口等妳", "慢慢行，唔急"],
            en: ["A little", "Not at all, watching you shop is fun", "I’ll wait outside", "Take your time, no rush"]
        },
        a: 1,
        f: {
            zh: "你要表現出一種『欣賞藝術家創作』嘅耐心。",
            en: "You must display the patience of someone watching a master artist at work."
        }
    },
    {
        s: {
            zh: "你哋迷路咗，佢話：<br>「都話行呢邊咯！」",
            en: "You’re both lost, and she says:<br>“I told you we should’ve gone this way!”"
        },
        o: {
            zh: ["妳頭先又唔講", "係我唔好，我睇錯地圖", "Google Map 錯呀", "唔好嘈啦"],
            en: ["You didn’t say that earlier", "My bad, I read the map wrong", "Google Maps messed up", "Can we not argue?"]
        },
        a: 1,
        f: {
            zh: "認錯係導航系統嘅核心組件。地圖可以錯，你唔可以唔認錯。",
            en: "Admitting fault is a core part of navigation. The map can be wrong. You cannot refuse to apologize."
        }
    },
    {
        s: {
            zh: "「點解你影我影得咁醜？」",
            en: "“Why do you always make me look so bad in photos?”"
        },
        o: {
            zh: ["係妳角度問題", "我已經盡咗力", "（即刻跪地重影 50 張）", "其實幾自然呀"],
            en: ["It’s your angle", "I already tried my best", "（Immediately kneels down and retakes 50 shots）", "It actually looks pretty natural"]
        },
        a: 2,
        f: {
            zh: "攝影技術係男友嘅基本人權。跪低先有高角度。",
            en: "Photography skills are basic boyfriend survival rights. Kneeling gives you the proper angle."
        }
    },
    {
        s: {
            zh: "喺機場，佢發現唔記得帶護照：",
            en: "At the airport, she realizes she forgot her passport:"
        },
        o: {
            zh: ["妳點搞架！", "唔緊要，我陪妳返去拎", "（冷靜搵解決方法）", "我一早問咗妳帶齊未"],
            en: ["How do you even mess that up?!", "It’s okay, I’ll go back with you to get it", "（Calmly tries to solve it）", "I asked you earlier if you packed everything"]
        },
        a: 1,
        f: {
            zh: "指責只會令機場變戰場。陪佢返去拎先係『患難見真情』。",
            en: "Blame turns an airport into a battlefield. Going back with her is where true love shows up."
        }
    },

    // --- 第九類：超市/消費篇 (Shopping) ---
    {
        s: {
            zh: "佢拎住兩支唔同牌子嘅洗面乳問：<br>「邊支好啲？」",
            en: "She holds up two different facial cleansers and asks:<br>“Which one is better?”"
        },
        o: {
            zh: ["是但一支啦", "右邊嗰支成分好啲", "（睇價錢揀平嗰支）", "左邊嗰支包裝似妳咁靚"],
            en: ["Either one is fine", "The one on the right has better ingredients", "（Checks the price and picks the cheaper one）", "The one on the left — its packaging is as pretty as you"]
        },
        a: 3,
        f: {
            zh: "佢唔係要功能，佢要嘅係被讚美同肯定。",
            en: "She’s not asking for function. She wants validation and compliments."
        }
    },
    {
        s: {
            zh: "佢買咗成車零食：<br>「我係咪好大食？」",
            en: "She filled the cart with snacks and asks:<br>“Am I eating too much?”"
        },
        o: {
            zh: ["係呀，買少啲啦", "唔係，呢啲都係我想食", "妳瘦，怕咩食", "買多兩包啦"],
            en: ["Yeah, maybe buy less", "No, I wanted all this stuff too", "You’re slim, what’s there to worry about?", "Get two more bags"]
        },
        a: 1,
        f: {
            zh: "將責任推落自己度。你要做嗰個『帶壞佢』嘅人。",
            en: "Shift the blame onto yourself. You must become the bad influence."
        }
    },
    {
        s: {
            zh: "排隊排好長，佢話：<br>「不如唔買囉。」",
            en: "The checkout line is ridiculously long, and she says:<br>“Maybe we should just forget it.”"
        },
        o: {
            zh: ["好呀，走啦", "排埋啦，唔差在", "（我去排，妳去坐下）", "都話遲啲先買"],
            en: ["Sure, let’s leave", "We’ve waited this long anyway", "（I’ll line up, you go sit down）", "I told you we should’ve come later"]
        },
        a: 2,
        f: {
            zh: "男人嘅體力係用嚟呢個時候消耗嘅。",
            en: "This is exactly what male stamina was invented for."
        }
    },
    {
        s: {
            zh: "「你覺得呢對鞋係咪好貴？」",
            en: "“Do you think these shoes are too expensive?”"
        },
        o: {
            zh: ["係，唔好買", "幾錢都值，最緊要妳鍾意", "妳自己諗啦", "不如買對貴啲嘅？"],
            en: ["Yeah, don’t buy them", "Worth every penny if you love them", "You decide", "Why not get an even more expensive pair?"]
        },
        a: 1,
        f: {
            zh: "錢係身外之物，尊嚴（同床位）先係實質資產。",
            en: "Money is temporary. Dignity — and your spot on the bed — are real assets."
        }
    },
    {
        s: {
            zh: "佢見到你睇緊件平衫：<br>「你覺得我平時買嘢好嘥錢？」",
            en: "She sees you looking at a cheap shirt and asks:<br>“Do you think I waste money when I shop?”"
        },
        o: {
            zh: ["係有少少", "完全唔會，妳好慳", "（沈默不語）", "我係想慳錢買禮物畀妳"],
            en: ["A little, yeah", "Not at all, you’re super sensible", "（Says nothing）", "I’m saving money to buy gifts for you"]
        },
        a: 3,
        f: {
            zh: "賦予你的節儉一個浪漫的目的。",
            en: "Give your cheapness a romantic mission."
        }
    },

    // --- 第十類：見家長/親戚篇 (Meeting Family) ---
    {
        s: {
            zh: "見完佢阿媽，佢問：<br>「你覺得我媽個人點呀？」",
            en: "After meeting her mom, she asks:<br>“So, what do you think of my mom?”"
        },
        o: {
            zh: ["好熱情", "有少少長氣", "同妳一樣咁善良", "好識照顧人"],
            en: ["Very warm and welcoming", "A little talkative", "She’s just as kind as you are", "She really knows how to take care of people"]
        },
        a: 2,
        f: {
            zh: "讚阿媽即係讚佢。性格遺傳係避唔開嘅讚美點。",
            en: "Complimenting her mom is basically complimenting her. Shared personality traits are a gold mine."
        }
    },
    {
        s: {
            zh: "佢親戚問你幾時結婚：",
            en: "Her relatives ask when you’re getting married:"
        },
        o: {
            zh: ["未有打算", "等我有錢先", "（望住佢：睇佢肯嫁未）", "快架啦"],
            en: ["No plans yet", "When I have more money", "（Looks at her: depends if she’ll say yes）", "Soon"]
        },
        a: 2,
        f: {
            zh: "將波傳返畀佢，同時展現你嘅誠意。",
            en: "Pass the ball back to her while making your intentions look sincere."
        }
    },
    {
        s: {
            zh: "佢阿媽整咗道好難食嘅菜：",
            en: "Her mom cooked a dish that tastes terrible:"
        },
        o: {
            zh: ["（照食並大讚好食）", "味道淡咗少少", "我有啲飽", "妳整得好食啲"],
            en: ["（Keeps eating and loudly praises it）", "It’s just a little under-seasoned", "I’m kinda full", "Yours tastes better"]
        },
        a: 0,
        f: {
            zh: "喺親家面前，你嘅味覺應該係暫時失靈嘅。",
            en: "In front of future in-laws, your taste buds should temporarily stop working."
        }
    },
    {
        s: {
            zh: "「你覺得我細佬係咪好懶？」",
            en: "“Do you think my little brother is lazy?”"
        },
        o: {
            zh: ["係，叫佢搵工啦", "細路仔係咁架啦", "佢有佢嘅天賦", "（唔發表意見）"],
            en: ["Yeah, tell him to get a job", "That’s just how kids are", "He has his own strengths", "（No comment）"]
        },
        a: 3,
        f: {
            zh: "佢可以鬧佢家人，你唔可以。保持中立係唯一活路。",
            en: "She’s allowed to roast her family. You are not. Neutrality is your only path to survival."
        }
    },
    {
        s: {
            zh: "佢阿爸問你鍾意飲咩酒：",
            en: "Her dad asks what kind of alcohol you like:"
        },
        o: {
            zh: ["我不嬲唔飲", "伯父飲咩我飲咩", "最貴嗰支", "啤酒就得"],
            en: ["I don’t usually drink", "Whatever you’re having, sir", "The most expensive bottle", "Beer is fine"]
        },
        a: 1,
        f: {
            zh: "服從性測試。伯父嘅品味就是你的品味。",
            en: "This is a compliance test. Her father’s taste is now your taste."
        }
    },

    // --- 第十一類：生理期/情緒篇 (The Period Cycle) ---
    {
        s: {
            zh: "佢生理期痛緊，你話：",
            en: "She’s having period cramps, and you say:"
        },
        o: {
            zh: ["飲多啲暖水", "（遞上暖宮貼+熱朱古力）", "早啲訓啦", "痛就睇醫生"],
            en: ["Drink more warm water", "（Hands her a heating pad and hot chocolate）", "Sleep earlier", "See a doctor if it hurts"]
        },
        a: 1,
        f: {
            zh: "講『飲暖水』係引火自焚。行動，兄弟，行動！",
            en: "Saying 'drink warm water' is self-immolation. Action, brother. Action!"
        }
    },
    {
        s: {
            zh: "佢突然無緣無故發火：",
            en: "She suddenly gets mad for no obvious reason:"
        },
        o: {
            zh: ["妳發夠脾氣未？", "對唔住，係我錯", "（行埋去攬住佢）", "點解妳咁唔講理"],
            en: ["Are you done yet?", "I’m sorry, it’s my fault", "（Walks over and hugs her）", "Why are you being so unreasonable?"]
        },
        a: 2,
        f: {
            zh: "擁抱可以解決 90% 唔講理嘅火。剩返 10% 靠認錯。",
            en: "A hug solves 90% of irrational fires. The remaining 10% requires an apology."
        }
    },
    {
        s: {
            zh: "「你覺唔覺得我最近好情緒化？」",
            en: "“Do you think I’ve been too emotional lately?”"
        },
        o: {
            zh: ["係呀，好難頂", "完全唔覺，妳好溫柔", "（錫佢一啖）", "可能係壓力大"],
            en: ["Yeah, it’s been a lot", "Not at all, you’ve been so gentle", "（Gives her a kiss）", "Maybe you’ve just been stressed"]
        },
        a: 2,
        f: {
            zh: "唔好分析，要安撫。",
            en: "Do not analyze. Soothe."
        }
    },
    {
        s: {
            zh: "「如果我以後生唔出仔，你會點？」",
            en: "“What if I can’t have children in the future?”"
        },
        o: {
            zh: ["領養囉", "唔生咪唔生", "我只係想要妳", "我阿媽會殺咗我"],
            en: ["We could adopt", "Then we just won’t have kids", "I only want you", "My mom would kill me"]
        },
        a: 2,
        f: {
            zh: "佢要嘅係安全感，唔係生育計劃。",
            en: "She wants reassurance, not a family planning seminar."
        }
    },
    {
        s: {
            zh: "佢喺度喊，問：<br>「你知唔知我喊咩？」",
            en: "She’s crying and asks:<br>“Do you even know why I’m crying?”"
        },
        o: {
            zh: ["我點知呀？", "對唔住，係我做得唔好", "（沈默遞紙巾）", "妳又發咩神經"],
            en: ["How would I know?", "I’m sorry, I must’ve done something wrong", "（Silently hands her tissues）", "What are you freaking out about now?"]
        },
        a: 1,
        f: {
            zh: "知唔知唔重要，重要嘅係你認咗錯先。",
            en: "Whether you know or not is irrelevant. The important part is apologizing first."
        }
    },

    // --- 第十二類：假設性災難 (Hypothetical Disasters) ---
    {
        s: {
            zh: "「如果我中咗降頭要殺你，你會點？」",
            en: "“If I got cursed and had to kill you, what would you do?”"
        },
        o: {
            zh: ["報警捉妳", "殺返妳轉頭", "心甘情願畀妳殺", "搵師傅解降"],
            en: ["Call the police on you", "Kill you first", "Let you kill me willingly", "Find a shaman to break the curse"]
        },
        a: 2,
        f: {
            zh: "愛情係盲目嘅，即使係降頭都要愛。",
            en: "Love is blind. Even black magic must bow before romance."
        }
    },
    {
        s: {
            zh: "「如果我變咗個男人，你仲愛唔愛我？」",
            en: "“If I turned into a man, would you still love me?”"
        },
        o: {
            zh: ["唔愛，我唔係基", "愛，我會變做女人", "（沈默）", "我愛嘅係妳嘅靈魂"],
            en: ["No, I’m not into men", "Yes, then I’d become a woman", "（Silence）", "I love your soul"]
        },
        a: 3,
        f: {
            zh: "靈魂係跨越性別嘅避難所。",
            en: "The soul is the ultimate gender-neutral shelter."
        }
    },
    {
        s: {
            zh: "「如果世界末日得返一個位，邊個上飛船？」",
            en: "“If there was only one seat on the escape ship during the apocalypse, who gets it?”"
        },
        o: {
            zh: ["我，我要生存", "妳，妳去啦", "我哋一齊留低", "比妳阿媽去"],
            en: ["Me, I want to live", "You, you take it", "We stay behind together", "Let your mom go"]
        },
        a: 1,
        f: {
            zh: "做英雄先有機會喺結算畫面生存。",
            en: "Only heroes have a chance of surviving the emotional endgame."
        }
    },
    {
        s: {
            zh: "「如果你有一億，但條件係要同我分手...」",
            en: "“If you could get 100 million, but only if you broke up with me...”"
        },
        o: {
            zh: ["一億！邊度簽名？", "我唔要錢，我要妳", "拎完分返一半畀妳", "考慮下先"],
            en: ["100 million?! Where do I sign?", "I don’t want the money, I want you", "I’d take it and give you half", "Let me think about it"]
        },
        a: 1,
        f: {
            zh: "遲疑一秒，一億都買唔返你條命。",
            en: "Hesitate for one second, and not even 100 million can buy your life back."
        }
    },
    {
        s: {
            zh: "「如果我老咗變到好皺皮...」",
            en: "“What if I get old and wrinkly someday...”"
        },
        o: {
            zh: ["我幫妳買護膚品", "到時我都老啦", "妳係我最靚嘅老太婆", "（沈默）"],
            en: ["I’ll buy you skincare", "I’ll be old too by then", "You’ll be my prettiest little old lady", "（Silence）"]
        },
        a: 2,
        f: {
            zh: "一齊變老係最浪漫嘅承諾。",
            en: "Growing old together is the most romantic promise there is."
        }
    }
]; // <-- 關鍵的結尾
