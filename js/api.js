const API = {
    async chat(messages, systemPrompt = null) {
        const requestMessages = [];
        
        if (systemPrompt) {
            requestMessages.push({
                role: 'system',
                content: systemPrompt
            });
        }
        
        messages.forEach(msg => {
            requestMessages.push({
                role: msg.role,
                content: msg.content
            });
        });

        try {
            const response = await fetch(CONFIG.API.BASE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CONFIG.API.API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: CONFIG.API.MODEL,
                    messages: requestMessages,
                    max_tokens: CONFIG.API.MAX_TOKENS,
                    temperature: CONFIG.API.TEMPERATURE,
                    top_p: CONFIG.API.TOP_P,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API Error:', errorData);
                throw new Error(errorData.error?.message || `HTTP错误 ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('API调用失败:', error);
            throw error;
        }
    },

    async chatWithPhilosopher(philosopherId, userMessage, conversationHistory = []) {
        const philosopher = PHILOSOPHERS[philosopherId];
        if (!philosopher) {
            throw new Error('哲学家不存在');
        }

        const messages = [
            ...conversationHistory,
            { role: 'user', content: userMessage }
        ];

        return await this.chat(messages, philosopher.systemPrompt);
    },

    async chatWithGeneralAssistant(userMessage, conversationHistory = []) {
        const systemPrompt = `你是一位博学的哲学导师，精通西方哲学史和精神分析理论。

你的职责：
- 帮助学习者理解哲学概念
- 引导深入思考
- 提供多角度的观点
- 推荐相关的哲学家和著作

对话风格：
- 友好而专业
- 善于举例说明
- 鼓励批判性思考
- 适当引用哲学名言

你可以讨论的主题：
- 古希腊哲学（苏格拉底、柏拉图、亚里士多德）
- 近代哲学（笛卡尔、康德、黑格尔）
- 现代哲学（尼采、海德格尔、萨特）
- 精神分析（弗洛伊德、拉康）
- 存在主义、现象学、后现代主义等`;

        const messages = [
            ...conversationHistory,
            { role: 'user', content: userMessage }
        ];

        return await this.chat(messages, systemPrompt);
    }
};
