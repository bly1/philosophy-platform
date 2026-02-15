const RESOURCES = {
    history: {
        id: 'history',
        type: '课程',
        title: '西方哲学史',
        shortDesc: '从古希腊到现代的完整哲学史课程，包含重要哲学家及其思想的详细介绍。',
        content: `
            <h3>课程大纲</h3>
            <div style="margin: 20px 0;">
                <h4 style="color: var(--primary-600); margin: 15px 0 10px;">第一部分：古希腊哲学</h4>
                <ul>
                    <li>前苏格拉底时期：泰勒斯、赫拉克利特、巴门尼德</li>
                    <li>古典时期：苏格拉底、柏拉图、亚里士多德</li>
                    <li>希腊化时期：斯多葛学派、伊壁鸠鲁学派</li>
                </ul>
                
                <h4 style="color: var(--primary-600); margin: 15px 0 10px;">第二部分：中世纪哲学</h4>
                <ul>
                    <li>奥古斯丁：信仰与理性</li>
                    <li>托马斯·阿奎那：经院哲学</li>
                    <li>唯名论与唯实论之争</li>
                </ul>
                
                <h4 style="color: var(--primary-600); margin: 15px 0 10px;">第三部分：近代哲学</h4>
                <ul>
                    <li>笛卡尔与理性主义</li>
                    <li>洛克、休谟与经验主义</li>
                    <li>康德的批判哲学</li>
                    <li>黑格尔的绝对唯心主义</li>
                </ul>
                
                <h4 style="color: var(--primary-600); margin: 15px 0 10px;">第四部分：现代哲学</h4>
                <ul>
                    <li>尼采与存在主义</li>
                    <li>现象学：胡塞尔、海德格尔</li>
                    <li>分析哲学：罗素、维特根斯坦</li>
                    <li>后现代主义：福柯、德里达</li>
                </ul>
            </div>
            <p style="background: var(--gray-100); padding: 15px; border-radius: 8px; margin-top: 20px;">
                <strong>学习建议：</strong>建议按时间顺序学习，理解哲学思想的历史演变脉络。
            </p>
        `
    },
    classics: {
        id: 'classics',
        type: '原典',
        title: '哲学经典选读',
        shortDesc: '精选柏拉图《理想国》、笛卡尔《沉思录》等经典著作的核心章节解读。',
        content: `
            <h3>哲学经典原文选读</h3>
            <p style="color: var(--gray-600); margin-bottom: 20px;">以下为哲学经典著作的核心段落原文，点击展开阅读完整内容</p>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">柏拉图《理想国》第七卷 - 洞穴寓言（完整版）</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"接下来，"我说，"让我们想象一个洞穴式的地下室，它有一长长通道通向外面，可让和洞穴一样宽的一路亮光照进来。有一些人从小就住在这洞穴里，头颈和腿脚都绑着，不能走动也不能转头，只能向前看着洞穴后壁。让我们再想象在他们背后远处高些的地方有东西燃烧着发出火光。在火和囚徒之间，在洞外上面有一条路。沿着路边已筑有一带矮墙。矮墙的作用像傀儡戏演员在自己和观众之间设的一道屏障，他们把木偶举到屏障上头去表演。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我看见了。"他说。</p>
                    
                    <p style="text-indent: 2em;">"接下来让我们想象有一些人拿着各种器物举过墙头，从墙后面走过，有的还举着用木料、石料或其他材料制作的假人和假兽。而这些过路人，你可以料到有的在说话，有的不在说话。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"这是一个奇特的比喻和一些奇特的囚徒。"他说。</p>
                    
                    <p style="text-indent: 2em;">"不，他们是一些和我们一样的人。"我说，"你且说说看，你认为这些囚徒除了火光投射到他们对面洞壁上的阴影而外，他们还能看到自己的或同伴们的什么呢？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"如果他们一辈子头颈被限制了不能转动，他们又怎样能看到别的什么呢？"</p>
                    
                    <p style="text-indent: 2em;">"那么，后面路上人举着过去的东西，除了它们的阴影而外，囚徒们能看到它们别的什么吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"当然不能。"</p>
                    
                    <p style="text-indent: 2em;">"那么，如果囚徒们能彼此交谈，你不认为他们会断定他们在看的是阴影本身吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"必然如此。"</p>
                    
                    <p style="text-indent: 2em;">"如果有一个过路人发出声音，引起囚徒对面洞壁的回声，你不认为囚徒们会断定这是他们对面洞壁上移动的阴影发出的吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"以宙斯的名义起誓，他们一定会这样想。"</p>
                    
                    <p style="text-indent: 2em;">"因此无疑，这种人不会想到，上述事物除阴影而外还有什么别的实在。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"无疑的。"</p>
                    
                    <p style="text-indent: 2em;">"那么，请设想一下，如果他们被解除禁锢，矫正迷误，你认为这时他们会怎样呢？如果真的发生如下的事情：其中有一人被解除了桎梏，被迫突然站了起来，转头环视，走动，抬头看望火光，你认为这时他会怎样呢？他在做这些动作时会感觉痛苦的，并且，由于眼花缭乱，他无法看见那些他原来只看见其阴影的事物。如果有人告诉他，说他过去看到的全是虚假，如今他由于被扭向了更加真实的器物，比较地接近了实在，所见比较真实了，你认为他听了这话会说些什么呢？如果再有人把墙头上过去的每一器物指给他看，并且逼他回答，那是什么，你不认为这时他会不知所说，并且认为他过去所看到的阴影比现在所看到的实物更真实吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"更真实得多呀！"</p>
                    
                    <p style="text-indent: 2em;">"如果他被迫看火光本身，他的眼睛会感到痛苦，他会转身走开，仍旧逃向那些他能够看清而且确实比人家所指示的实物更清楚更鲜明的影像。不是吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"是这样。"</p>
                    
                    <p style="text-indent: 2em;">"再说，如果有人硬拉他走上一条陡峭崎岖的坡道，直到把他拉出洞穴见到了外面的阳光，不让他中途退回去，他会觉得这样被强迫着走很痛苦，并且感到恼火；当他来到阳光下时，他会觉得眼前金星乱蹦金蛇乱窜，以致无法看见任何一个现在被称为真实的事物。你不认为会这样吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"噢，的确不是一下子就能看得见的。"</p>
                    
                    <p style="text-indent: 2em;">"因此我认为，要他能在洞穴外面的高处看得见东西，大概需要有一个逐渐习惯的过程。首先大概看阴影是最容易，其次要数看人和其他东西在水中的倒影容易，再次是看东西本身。经过这些之后，他大概会觉得在夜里观察天象和天空本身，看月光和星光，比白天看太阳和阳光容易。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"当然啰。"</p>
                    
                    <p style="text-indent: 2em;">"这样一来，我认为，他大概终于就能直接观看太阳本身，看见它的真相了，就可以不再通过水中的倒影或影像来看它，而是在它本来的地方就其本身来看它了。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"这是一定的。"</p>
                    
                    <p style="text-indent: 2em;">"接着他大概对此已经可以得出结论了：造成四季交替和年岁周期，主宰可见世界一切事物的正是这个太阳，它也就是他们过去通过某种曲折看见的所有那些事物的原因。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>洞穴寓言的核心含义：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>洞穴</strong>：象征感官世界，我们日常生活的领域</li>
                            <li><strong>囚徒</strong>：象征普通人，被感官和偏见束缚</li>
                            <li><strong>阴影</strong>：象征感官世界的影像，我们误以为是真实</li>
                            <li><strong>火光</strong>：象征太阳的仿制品，感官世界的光源</li>
                            <li><strong>上升之路</strong>：象征灵魂的上升，哲学教育的历程</li>
                            <li><strong>太阳</strong>：象征"善的理念"，一切真理和存在的源泉</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>哲学意义：</strong>柏拉图通过这个寓言说明，真正的哲学教育是灵魂的转向——从关注感官世界转向关注理念世界。这是一个痛苦的过程，需要勇气和毅力。哲学家是那些挣脱枷锁、走出洞穴、见到太阳的人，他们有责任回到洞穴中解救其他人。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">笛卡尔《第一哲学沉思录》第二沉思 - 我思故我在（完整版）</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"我刚才费了很大力气所认识到的一切，都只能建立在我心思单纯、轻信的习惯上，它们是很可疑、很不确实的，从今以后，我如果不想让自己陷入无穷无尽的怀疑，就应当把它们统统抛弃。可是，要做到这一点，又应当怎么着手呢？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"可是，我究竟是什么呢？是一个在思维的东西。什么是一个在思维的东西呢？那就是说，一个在怀疑、在理解、在肯定、在否定、在愿意、在不愿意、也在想象、在感觉的东西。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我存在，这是确实的。可是多久呢？我思维多久，就存在多久。因为假如我完全停止思维，也许我就完全停止存在了。我现在对这一点不承认任何必然性，因为我现在对自己的认识并不是靠我的记忆，并不是靠我以前有过的心灵，而是完全靠我现在的意识。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"可是我究竟是什么呢？是一个在思维的东西。什么是一个在思维的东西呢？那就是说，一个在怀疑、在理解、在肯定、在否定、在愿意、在不愿意、也在想象、在感觉的东西。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我并不是那种可以描绘、可以限定的元素组成的身体，并不是那种可以围绕某个中心、可以充满某个空间、可以把其他物体排挤出去的身体。所有这些身体的特性，我一个也没有，它们都可以怀疑，都可以否定。可是我确实存在，这一点是我在怀疑、在否定的时候也不能否认的。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"因此，我认识了我是一个本体，它的全部本质或本性只是思维，而且它存在并不需要空间，也不依赖任何物质的东西。所以这个我，这个使我成为我的那个灵魂，是完全不同于身体的，而且比身体更容易认识，即使身体不存在，灵魂也仍然不失其为灵魂。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>"我思故我在"的论证过程：</strong></p>
                        <ol style="margin-top: 10px;">
                            <li><strong>方法论怀疑</strong>：笛卡尔首先怀疑一切可以怀疑的东西——感官、身体、物质世界</li>
                            <li><strong>不可怀疑的基点</strong>：在怀疑一切的过程中，"我在怀疑"这件事本身不可怀疑</li>
                            <li><strong>思维的确证</strong>：怀疑就是思维，思维必然有一个思维者</li>
                            <li><strong>存在的确证</strong>：因此，"我"作为思维者必然存在</li>
                        </ol>
                        <p style="margin-top: 15px;"><strong>身心二元论：</strong>笛卡尔由此得出，心灵的本质是思维，身体的本质是广延。心灵不需要空间，不依赖物质，因此心灵与身体是两种完全不同的实体。这开创了近代哲学的身心二元论传统。</p>
                        <p style="margin-top: 10px;"><strong>重要影响：</strong>这个论证成为西方哲学的转折点，从关注外部世界转向关注主体意识，开启了近代哲学的认识论转向。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">亚里士多德《尼各马可伦理学》第一卷 - 幸福与善</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"每种技艺和研究，同样地，人的每种实践和选择，都以某种善为目的。所以有人正确地说，善是万物所追求的目的。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"但如果在我们活动的目的中有的是因其自身而被追求，有的是因别的目的而被追求，如果我们并非选择所有的事物都为着某一其他事物（这样将陷入无穷后退，一切欲求皆成空虚），那么显然并非所有目的都是最后的，只有最高的善才是最后的目的。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"那么，什么是最高善呢？在活动中，大多数人几乎一致同意它的名称：无论是普通人还是有教养的人都说这是幸福，并且认为生活得好与行为得好就是幸福。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"人的善就是灵魂合乎德性的活动，如果有不止一种德性，就是合乎最好、最完善的德性的活动。不过，还要加上'在一生中'。因为一只燕子造不成春天，一个白天也造不成春天，同样，一朝一夕也不能使人幸福。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"德性分为两类：一类是理智德性，一类是伦理德性。智慧和理解属于理智德性，慷慨和节制属于伦理德性。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"伦理德性产生于习惯，'伦理'这个词就是从'习惯'演变来的。由此可见，伦理德性不是由自然在我们身上造成的，因为由自然造就的东西不能由习惯改变。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>核心概念：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>最高善（幸福）</strong>：一切活动的最终目的，因其自身而被追求</li>
                            <li><strong>德性</strong>：使人能够很好地完成其功能的品质</li>
                            <li><strong>中道原则</strong>：德性是两个极端之间的中道</li>
                            <li><strong>习惯</strong>：伦理德性通过习惯养成</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>亚里士多德的幸福观：</strong>幸福不是主观感受，而是"灵魂合乎德性的活动"。真正的幸福需要一生的时间来实现，不是短暂的快乐。这与现代人对幸福的理解有很大不同。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">康德《纯粹理性批判》第一版序言 - 理性的法庭</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"我们的时代是一个批判的时代，没有什么东西能够逃避这个批判。宗教想凭借它的神圣，立法想凭借它的权威，都想逃避这个批判。但是这样一来，它们就引起了人们对它们的正当怀疑，而无法要求真诚的尊重了。理性只尊重那些经得起它的自由、公开检验的东西。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我所理解的批判，不是对书本和体系的批判，而是对纯粹理性能力的批判，即对理性独立于一切经验能够认识的一切东西的批判。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我敢断言，至今为止还没有一个真正建立在可靠原则上的形而上学。请看那些自命为创造形而上学的人吧！他们不是在黑暗中摸索，就是在虚构空中楼阁。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我们的问题是：先天综合判断是如何可能的？形而上学的全部任务就在于回答这个问题。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"迄今为止，人们都是认为我们的一切知识都必须依照对象；但是，关于对象，我们却不能通过先天知识有任何东西。因此，我尝试一下，是否可以假定对象必须依照我们的知识。这个假定与所要求的目的更加一致。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"这就是哥白尼式的革命：不是知识依照对象，而是对象依照知识。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>康德的"哥白尼式革命"：</strong></p>
                        <p style="margin-top: 10px;">传统认识论认为认识必须符合对象，康德颠倒了这一关系：对象必须符合我们的认识能力。就像哥白尼让太阳静止、地球运动一样，康德让对象围绕认识主体旋转。</p>
                        <p style="margin-top: 15px;"><strong>核心思想：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>先天综合判断</strong>：既具有普遍必然性，又能扩展知识的判断</li>
                            <li><strong>人为自然立法</strong>：认识主体为自然确立法则</li>
                            <li><strong>现象与物自体</strong>：我们只能认识现象，不能认识物自体</li>
                        </ul>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">尼采《查拉图斯特拉如是说》序言 - 超人</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"查拉图斯特拉三十岁时离开他的家乡和家乡的那个湖，来到山里。他在山里安享他的智慧与孤独，十年不倦。但最后他的心情变了，一天早晨，他与曙光一同醒来，走到太阳面前，对它如是说："</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"'你伟大的天体啊！假如你没有你所照耀的那些人，你的幸福会是什么呢！十年来，你每天升到我的山洞上来。假如没有我、我的鹰和我的蛇，你会厌倦于你的光明和这条行程吧。'"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"'看啊！我厌倦于我的智慧，像蜜蜂采集了太多的蜜，我需要有人伸出手来接取它。'"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"'我要把它赠予和分发，直到人群中的智者重新因自己的愚蠢而快乐，穷人重新因自己的财富而幸福。'"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"'为此我必须下降到深处，就像你每天傍晚所做的，你沉入海的后方，还把光明带给下界，你这过于丰裕的天体啊！'"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"查拉图斯特拉如是说，然后他下山，独自一人。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我教你们什么是超人。人是应该被超越的某种东西。你们为了超越自己做过什么呢？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"直到现在，一切生物都创造了超过自己的东西：你们要做这大潮中的落潮，宁愿退化为动物而不愿超越人吗？"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"什么是猿猴对于人？是笑柄，是痛苦的羞耻。人对于超人来说也应当是笑柄，是痛苦的羞耻。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"你们走完了从虫到人的道路，但在你们心中仍有许多是虫。你们曾经是猿猴，现在人比任何猿猴更是猿猴。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"看啊，我教你们什么是超人！"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"超人就是大地的意义。让你们的意志说：超人就是大地的意义！"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我恳求你们，我的兄弟们，忠于大地吧，不要相信那些对你们说起超尘世希望的人！他们是毒害者，无论他们是有意的还是无意的。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>尼采的核心思想：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>超人</strong>：人是桥梁而非目的，人应该被超越</li>
                            <li><strong>忠于大地</strong>：反对基督教的"彼岸"幻想，肯定现世生命</li>
                            <li><strong>权力意志</strong>：生命的本质是力量的增长和扩张</li>
                            <li><strong>永恒轮回</strong>：生命应该以能够无限次重复的方式去生活</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>风格特点：</strong>尼采用诗意的语言、寓言的形式表达哲学思想。查拉图斯特拉是波斯拜火教的创始人，尼采借用这个形象来宣告"上帝已死"和超人的到来。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">海德格尔《存在与时间》导论 - 存在问题</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"存在是最普遍的概念，但这并不等于说它是最清楚的概念，根本不需要进一步讨论。存在概念毋宁说是最晦暗的概念。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"存在问题今天已被遗忘了，尽管我们这个时代以为把'形而上学'重新肯定下来是一种进步。我们甚至以为自己不再需要为这种问题费神。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"存在总是某种存在者的存在。存在者全体可以按照其不同的存在领域划分成为各种特定的事质领域。这些事质领域，例如历史、自然、空间、生命、此在、语言之类，又可以相应地专题化为各种科学探索的对象。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我们向来已活动在对存在的某种领会中。正是从这种领会中生发出对存在的明确追问以及对这种追问之解答的探索趋向。我们不知道'存在'说的是什么，然而当我们问'存在是什么？'时，我们已经栖身于对'是'的某种领会之中了。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"此在是一种存在者，但并不是仅仅与其他存在者并列的一种存在者。此在在存在者层次上的与众不同之处在于：它在存在论层次上存在。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"此在总是它的可能性，而不仅仅是'拥有'可能性。此在在其存在中总已经在先于自身。此在不是一个现成的东西，再额外具有某种能力。此在原本就是可能之在。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>核心概念：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>存在与存在者</strong>：存在是最普遍、最晦暗的概念，被传统形而上学遗忘</li>
                            <li><strong>此在（Dasein）</strong>：人这种特殊的存在者，能够追问存在的意义</li>
                            <li><strong>在世存在</strong>：此在的基本结构，人总是已经"在世界之中"</li>
                            <li><strong>向死而生</strong>：此在本真的可能性，面对死亡而生存</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>海德格尔的突破：</strong>传统形而上学追问"存在者是什么"，海德格尔追问"存在的意义是什么"。他通过分析此在的存在方式来揭示存在的意义，这被称为"基础存在论"。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">萨特《存在主义是一种人道主义》- 存在先于本质</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"我们所说的存在先于本质到底是什么意思呢？意思就是说：首先有人，人碰上自己，在世界上涌现出来，然后才给自己下定义。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"如果存在真是先于本质的话，人就要对自己的本性负责。所以存在主义的第一个后果就是使人人明白自己的本来面目，并且把自己存在的责任完全由自己担负起来。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"当我们说人自己选择时，我们的意思就是每一个人自己选择；但是当我们说人自己选择时，我们的意思是每一个人在选择自己的时候也选择了所有的人。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"存在主义的核心思想是什么呢？是自由承担责任的绝对性质。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"人被判处为自由。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"人首先存在，碰到各种遭遇，世界起伏不定，然后定义自己。在开头人是无，后来才成为什么，这个什么就是他自己造出来的。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"因此，根本没有人性这个东西，因为没有上帝来构想它。人不仅存在，而且是他自己决定他应该是什么。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>存在主义的核心命题：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>存在先于本质</strong>：人首先存在，然后通过选择定义自己</li>
                            <li><strong>绝对的自由</strong>：没有上帝，没有预定的人性，人完全自由</li>
                            <li><strong>绝对的责任</strong>：自由意味着对选择承担全部责任</li>
                            <li><strong>"被判处为自由"</strong>：自由不是恩赐，而是负担</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>哲学意义：</strong>萨特的存在主义是对传统本质主义的颠覆。传统认为人有固定的本质（如理性动物），萨特认为人没有预定本质，人通过自己的选择创造自己。这既是解放，也是沉重的责任。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">弗洛伊德《梦的解析》第七章 - 梦的心理学</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"梦不是一种躯体现象，而是一种心理现象。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"梦是一种（被压抑的）欲望的（伪装的）满足。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"梦的工作是将梦的隐念转变为梦的显意的过程。这个过程包括：凝缩、移置、象征化和润饰。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"凝缩：梦的显意比隐念简短得多，梦的隐念通过凝缩被压缩成显意。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"移置：梦的隐念的中心在显意中被移置到另一个不重要的元素上。这样，梦的显意就不再是隐念的真实表达了。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"象征化：梦利用象征来代表被压抑的内容。象征不是梦者有意选择的，而是无意识的语言。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"无意识是心理过程的一个领域，这些过程在意识之外进行，但对行为和心理活动有决定性影响。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"精神分析的任务就是使无意识成为意识。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>弗洛伊德梦论的核心：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>梦的实质</strong>：梦是被压抑欲望的伪装满足</li>
                            <li><strong>显意与隐念</strong>：梦的表面内容（显意）掩盖了真实含义（隐念）</li>
                            <li><strong>梦的工作</strong>：凝缩、移置、象征化、润饰</li>
                            <li><strong>无意识</strong>：梦是通往无意识的"康庄大道"</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>历史意义：</strong>《梦的解析》（1900年）标志着精神分析的诞生。弗洛伊德通过对梦的分析揭示了无意识的存在，彻底改变了人类对自身心灵的理解。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">拉康《文集》- 无意识像语言一样结构化</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"无意识像语言一样结构化。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"无意识是大他者的辞说。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"人的欲望是大他者的欲望。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"能指对所指具有优先性。能指链的滑动造成了意义的不断延迟——这就是我所称的'滑行'。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"镜像阶段：婴儿在6-18个月时，通过镜中形象首次认识到自己的统一性，但这是一种误认——将破碎的身体体验误认为统一的形象。主体由此形成，但也由此分裂。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"三界理论：想象界（镜像认同）、象征界（语言法则）、实在界（不可象征化的剩余）。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"对象a：欲望的原因而非对象。它是永远缺失的，正是这种缺失驱动着欲望。"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>拉康的核心概念：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>无意识的结构</strong>：无意识不是混乱的本能，而是像语言一样有结构</li>
                            <li><strong>能指优先</strong>：语言中的能指（音响形象）比所指（概念）更重要</li>
                            <li><strong>镜像阶段</strong>：主体通过误认而形成，因此主体本质上是分裂的</li>
                            <li><strong>大他者</strong>：象征秩序，语言和社会法则的领域</li>
                            <li><strong>对象a</strong>：欲望的永恒缺失，驱动欲望运作</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>拉康的革新：</strong>拉康将结构主义语言学引入精神分析，重新解读弗洛伊德。他认为无意识不是生物本能的储存所，而是语言结构的产物。主体不是自主的，而是被语言所构成的。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">马可·奥勒留《沉思录》- 斯多葛智慧</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"你所没有的东西，不要想得太多，要想到你所有的。然后，还要想到你如果有了那些东西，你会多么热烈地渴望它们。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"不要因为他人的恶行而使自己失去内心的平静。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"一切皆流，无物常驻。你的一生就是不断的变易，宇宙亦然。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"不要去想将来会发生什么，而要想着现在应该做什么。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"无论做什么事，都要问问自己：这件事对我是不是必要的？如果不是，就不要做。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"你的心会变成你经常想的样子。因为灵魂会染上思想的颜色。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"不要因为他人的过错而责怪他们，因为他们不知道自己在做什么。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"死亡不过是元素的解散，如果元素本身不会毁灭，我们又何必害怕元素的解散呢？"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>斯多葛哲学的核心：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>控制二分法</strong>：区分可控与不可控，只关注可控之事</li>
                            <li><strong>顺应自然</strong>：接受命运的安排，与宇宙和谐共处</li>
                            <li><strong>内心平静</strong>：不受外界干扰，保持心灵的宁静</li>
                            <li><strong>当下意识</strong>：专注于现在，不被过去和未来困扰</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>历史价值：</strong>马可·奥勒留是罗马帝国最伟大的皇帝之一，他的《沉思录》是写给自己的日记，却成为斯多葛哲学的经典之作。它展示了如何在权力和责任中保持内心的平静与智慧。</p>
                    </div>
                </div>
            </details>
            
            <details style="background: var(--gray-50); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600); font-size: 1.1rem;">维特根斯坦《逻辑哲学论》- 语言的界限</summary>
                <div style="margin-top: 15px; line-height: 1.8;">
                    <h4 style="color: var(--primary-500); margin-bottom: 10px;">【原文】</h4>
                    <p style="text-indent: 2em;">"1. 世界是一切发生的事情。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"1.1 世界是事实的总体，而不是事物的总体。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"2. 发生的事情，即事实，是诸事态的存在。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"3. 事实的逻辑图像是思想。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"4. 思想是有意义的命题。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"5. 命题是基本命题的真值函项。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"6. 真值函项的一般形式是：[p, ξ, N(ξ)]。这是命题的一般形式。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"7. 对于不可说的东西，必须保持沉默。"</p>
                    
                    <p style="text-indent: 2em; margin-top: 10px;">"我的命题可以这样来说明：理解我的人，当他利用这些命题作为阶梯爬上去达到它们之上之后，最后会认识到它们是无意义的。（可以说，在爬上梯子之后，他必须把梯子扔掉。）"</p>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--primary-50); border-radius: 8px; border-left: 4px solid var(--primary-500);">
                        <h4 style="color: var(--primary-600); margin-bottom: 10px;">【解读】</h4>
                        <p><strong>维特根斯坦的核心思想：</strong></p>
                        <ul style="margin-top: 10px;">
                            <li><strong>图像论</strong>：语言是世界的图像，命题描绘事实</li>
                            <li><strong>可说与不可说</strong>：只有事实可以说，价值、意义、伦理不可说</li>
                            <li><strong>语言的界限</strong>：语言的界限就是世界的界限</li>
                            <li><strong>沉默</strong>：对不可说的东西保持沉默，这是哲学的最终智慧</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>哲学意义：</strong>《逻辑哲学论》试图划定思想与语言的界限。维特根斯坦认为，传统哲学问题大多源于对语言逻辑的误解。真正的哲学工作是澄清思想，而非建构理论。</p>
                    </div>
                </div>
            </details>
        `
    },
    videos: {
        id: 'videos',
        type: '视频',
        title: '哲学讲座系列',
        shortDesc: '知名教授的哲学讲座视频，深入浅出地讲解复杂的哲学概念。',
        content: `
            <h3>精选视频课程</h3>
            <p>请访问"视频课程"板块，观看B站未明子等优质UP主的哲学系列视频。</p>
        `
    },
    dictionary: {
        id: 'dictionary',
        type: '工具',
        title: '概念词典',
        shortDesc: '收录500+哲学核心概念，提供清晰的定义和相关哲学家信息。',
        content: `
            <h3>哲学核心概念</h3>
            <input type="text" id="conceptSearch" placeholder="搜索概念..." style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid var(--gray-300); border-radius: 8px;">
            <div id="conceptList">
                <div class="concept-item" data-keywords="此在 存在者 在世存在">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">此在 (Dasein)</summary>
                        <p style="margin-top: 10px;">海德格尔的核心概念。此在是能够追问存在意义的特殊存在者——人。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="我思故我在 怀疑 确定性">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">我思故我在 (Cogito ergo sum)</summary>
                        <p style="margin-top: 10px;">笛卡尔的第一原理。通过方法论怀疑，最终发现"我在怀疑"这件事本身不可怀疑。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="理念 理念论 洞穴">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">理念 (Idea/Eidos)</summary>
                        <p style="margin-top: 10px;">柏拉图的核心概念。理念是永恒、完美、不变的真实存在。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="绝对命令 定言命令 道德律">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">绝对命令 (Categorical Imperative)</summary>
                        <p style="margin-top: 10px;">康德的道德原则。只按照你愿意它成为普遍法则的准则行动。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="权力意志 生命 力量">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">权力意志 (Will to Power)</summary>
                        <p style="margin-top: 10px;">尼采的核心概念。生命的本质不是生存，而是力量的增长和扩张。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="无意识 潜意识 压抑">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">无意识 (Unconscious)</summary>
                        <p style="margin-top: 10px;">弗洛伊德的核心发现。无意识是被压抑的欲望和创伤记忆的储存所。</p>
                    </details>
                </div>
                <div class="concept-item" data-keywords="对象a 欲望原因 匮乏">
                    <details style="background: var(--gray-50); padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary-600);">对象a (objet petit a)</summary>
                        <p style="margin-top: 10px;">拉康概念。欲望的原因，而非欲望的对象。永远缺失，永远被追寻。</p>
                    </details>
                </div>
            </div>
        `
    },
    exercises: {
        id: 'exercises',
        type: '练习',
        title: '思考训练',
        shortDesc: '通过批判性思维练习和哲学问题，培养独立思考能力。',
        content: `
            <h3>批判性思维练习</h3>
            <div style="margin: 20px 0;">
                <div style="background: var(--primary-50); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h4 style="color: var(--primary-600);">练习一：苏格拉底式诘问</h4>
                    <p><strong>问题：</strong>什么是"正义"？</p>
                    <p style="margin-top: 10px;"><strong>引导问题：</strong></p>
                    <ul style="margin-top: 10px;">
                        <li>你能给出一个正义的定义吗？</li>
                        <li>这个定义在所有情况下都成立吗？</li>
                        <li>有没有反例可以挑战这个定义？</li>
                    </ul>
                </div>
                
                <div style="background: var(--gray-100); padding: 20px; border-radius: 8px;">
                    <h4 style="color: var(--gray-700);">练习二：概念分析</h4>
                    <p><strong>任务：</strong>分析"自由"这个概念</p>
                    <p style="margin-top: 10px;"><strong>步骤：</strong></p>
                    <ol style="margin-top: 10px;">
                        <li>列出"自由"的不同含义</li>
                        <li>区分"消极自由"和"积极自由"</li>
                        <li>思考自由与责任的关系</li>
                        <li>讨论自由的边界在哪里</li>
                    </ol>
                </div>
            </div>
        `
    },
    community: {
        id: 'community',
        type: '社区',
        title: '学习小组',
        shortDesc: '加入哲学讨论组，与志同道合的学习者交流心得。',
        content: `
            <h3>加入学习社区</h3>
            <div style="margin: 20px 0;">
                <div style="background: linear-gradient(135deg, var(--primary-50), var(--sage-50)); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h4 style="color: var(--primary-600);">📖 读书会</h4>
                    <p>每月共读一本哲学经典</p>
                    <p style="margin-top: 10px;"><strong>本月书目：</strong>《存在与时间》导论部分</p>
                </div>
                
                <div style="text-align: center; padding: 20px; background: var(--primary-600); color: white; border-radius: 8px;">
                    <p style="font-size: 1.1rem; margin-bottom: 10px;">准备好加入了吗？</p>
                    <p style="font-size: 0.9rem; opacity: 0.9;">使用AI对话功能开始你的哲学探索之旅</p>
                </div>
            </div>
        `
    }
};

function getResourceList() {
    return Object.values(RESOURCES).map(r => ({
        id: r.id,
        type: r.type,
        title: r.title,
        shortDesc: r.shortDesc
    }));
}
