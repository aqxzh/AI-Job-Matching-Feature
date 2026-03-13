import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { vacancies, type Vacancy } from '../data/vacancies';
import svgPaths from '../../imports/svg-3vepo7tdp4';
import svgPathsFaq from '../../imports/svg-byucbudsw5';
import { imgGroup } from '../../imports/svg-nejob';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  vacancyCount?: number;
  vacancies?: Vacancy[];
  timestamp: Date;
}

// Mock данные профиля пользователя из системы eQyzmet
interface UserProfile {
  name: string;
  education: string;
  experience: string[];
  skills: string[];
  category: string;
  totalYears: number;
}

const userProfile: UserProfile = {
  name: 'ЖУМАБАЙ АКБОТА АКЫЛБЕККЫЗЫ',
  education: 'Высшее образование - Информационные технологии',
  experience: [
    'Специалист по цифровизации - 2 года',
    'Аналитик данных - 1.5 года'
  ],
  skills: ['Python', 'SQL', 'Аналитика данных', 'Цифровизация', 'Project Management'],
  category: 'IT',
  totalYears: 3.5
};

// FAQ вопросы
const faqQuestions = [
  {
    id: 1,
    category: 'Вход в систему',
    question: 'Я не могу зайти на е-қызмет',
    answer: 'Нужно задать уточняющие вопросы. Что у Вас выходит? Можете отправить скриншот? Вам пришло смс от 1414? В момент когда к вам приходит сообщение с 1414 согласие даёте, отправляете смс с сообщением 511'
  },
  {
    id: 2,
    category: 'Восстановление',
    question: 'Забыл пароль',
    answer: 'Обратитесь в службу поддержки. Также кандидат может воспользоваться функцией "Забыли пароль"'
  },
  {
    id: 3,
    category: 'СМС верификация',
    question: 'Не приходит смс от 1414. Что делать?',
    answer: 'Если не приходит смс от 1414, куда нужно отправить 511 или 512 или не отправляется смс, то нужно обратиться оператору мобильной связи'
  },
  {
    id: 4,
    category: 'Интернет',
    question: 'Проблема с интернет соединением. Что делать?',
    answer: 'Попробуйте поменять интернет соединение, очистить кэш или перезайти, обновите нажав ctrl+F5.'
  },
  {
    id: 5,
    category: 'Резюме',
    question: 'Как загрузить резюме?',
    answer: 'Вам нужно заполнить резюме самостоятельно. На портале е-қызмет в разделе Помощь есть подробная инструкция.'
  },
  {
    id: 6,
    category: 'Загрузка файлов',
    question: 'Не могу загрузить файл',
    answer: 'Нужно сжать документ до 2 мб, можете в интернете набрать сжать пдф и загрузить файл. Можно сжать сжатый файл'
  },
  {
    id: 7,
    category: 'Образование',
    question: 'Я заполнил Образование, но выходит что нужно заполнить Образование',
    answer: 'Вам нужно проверить заполнили ли Вы университет, который Вы окончили.'
  },
  {
    id: 8,
    category: 'Семейное положение',
    question: 'Как заполнить семейное положение?',
    answer: 'Вам не нужно заполнять семейное положение, в разделе дополнительно нажав на значок ручки можете загрузить справку о семейном положении если запрашивает кадровая служба'
  },
  {
    id: 9,
    category: 'Вакансии',
    question: 'Не могу откликнуться, не подходят квалификационные требования',
    answer: 'Обратитесь в службу поддержки которая указана на портале в разделе помощь или на главной странице. Посредством ватсап или же jivo чат'
  },
  {
    id: 10,
    category: 'Тестирование',
    question: 'Как узнать результаты тестирования?',
    answer: 'Результаты тестирования можно узнать в личном кабинете в разделе "Мои заявки" после завершения обработки'
  },
  {
    id: 11,
    category: 'Собеседование',
    question: 'Когда будет собеседование?',
    answer: 'О дате и времени собеседования вы будете уведомлены через СМС и на электронную почту, указанную в профиле'
  },
  {
    id: 12,
    category: 'Резюме',
    question: 'Можно ли изменить данные в резюме после подачи?',
    answer: 'Да, вы можете редактировать резюме в любое время в личном кабинете до момента подачи заявки на вакансию'
  },
  {
    id: 13,
    category: 'Заявки',
    question: 'Как отозвать заявку?',
    answer: 'В разделе "Мои заявки" найдите нужную вакансию и нажмите кнопку "Отозвать заявку"'
  },
  {
    id: 14,
    category: 'Заявки',
    question: 'Почему моя заявка отклонена?',
    answer: 'Причины отклонения указываются в статусе заявки. Для подробной информации обратитесь в службу поддержки или в организацию-работодателя'
  },
  {
    id: 15,
    category: 'Тестирование',
    question: 'Меня выкинуло с теста что делать?',
    answer: '3) Кандидат со своей стороны обеспечивает наличие компьютера/ноутбука с браузером Chrome (версия не менее 95.x.x.), Opera, Microsoft Edge стабильного интернета со скоростью не менее 5 мб/сек, функционирующей веб-камеры и микрофона, хорошее освещение, тсутствие посторонних звуков/шумов и людей. 4) Обращаем ваше внимание, что рекомендуется использовать персональное интернет- соединение (например, домашний Wi-Fi). Согласно Постановлению Правительства Республики Казахстан от 20 декабря 2016 года № 832 5) Об утверждении единых требований в области информационнокоммуникационных технологий и обеспечения информационной безопасности, корпоративные сети могут быть ограничены единым шлюзом доступа в интернет, что может вызвать перебой в соединении либо невозможность подключения к системе тестирования. Также можете обратиться в службу поддержки'
  },
  {
    id: 16,
    category: 'Тестирование',
    question: 'Ошибки во время теста вышли. Я не прошел?',
    answer: 'Система прокторинга автоматически реагирует на каждое движение и фиксирует наруше��ия, далее проктор проверяет видео и в течении 24 часов выносит решение. Просим ожидать решение проктора'
  },
  {
    id: 17,
    category: 'ОЛК',
    question: 'Нет мест. Не могу записаться на ОЛК',
    answer: 'Просим попробовать записаться на все доступные времена для записи. Если выходит что нет мест, это означает что все места на данное время которое вы пытаетесь записаться заняты.'
  },
  {
    id: 18,
    category: 'ОЛК',
    question: 'Как записаться на ОЛК',
    answer: '1) Вы хотите сдать ОЛК онлайн или офлайн? 2) Офлайн ОЛК можно сдать только после сдачи НПА теста 3) Онлайн сдать ОЛК тест можно только при отклике на вакансию. На портале е-қызмет нажимаете "Откликнуться", далее система предложит Вам записаться на ОЛК тест, выбираете дату, время, язык и записываетесь. Запись будет в личном кабинете в разделе "Мои заявки"'
  },
  {
    id: 19,
    category: 'Результаты',
    question: 'Когда выйдет результат? Как узнать результать? Вчера сдавал(а) тест',
    answer: 'Что у Вас стоит в статусе, в разделе "Мои заявки"?'
  },
  {
    id: 20,
    category: 'Проверка',
    question: 'На проверке у проктора что это?',
    answer: 'Проктор проверяет 24 часа с момента поступления записи, просим ожидать так как проктор проверяет в рабочее время'
  },
  {
    id: 21,
    category: 'Резюме',
    question: 'Отправили на доработку',
    answer: 'Если ваше резюме отправили на доработку, вам нужно внести все изменения требуемые кадровой службой, в раздел резюме до срока который указан в уведомление К этапу собеседования посредством практической оценки (далее -практическая оценка) допускаются два кандидата, набравшие наивысшие баллы по результатам предыдущих этапов общего конкурса.'
  },
  {
    id: 22,
    category: 'Практическая оценка',
    question: 'Сколько кандидатов проходт на практическую оценку?',
    answer: 'В случае, если пороговое значение по результатам предыдущих этапов общего конкурса набирает один кандидат, допускается участие одного кандидата. При равенстве баллов кандидатов, набравших наивысшие баллы по результатам предыдущих этапов общего конкурса, допускается превышение установленного количества кандидатов, направляемых на практическую оценку. В день завершения выполнения всех трех заданий результаты направляются на проверку проктору. Проверка проктором проводится в течение одного следующего рабочего дня В случае отсутствия нарушений требований Правил кандидатом, в течение одного рабочего дня после объявления результатов проверки проктора непосредственный руководитель структурного подразделения государственного органа, имеющего вакантную должность, на которую объявлен общий конкурс, вносит в систему итоги этапа практической оценки по форме согласно приложению 2 к настоящим Правилам. Наличие у кандидата сертификата тестирования на знание государственного языка и законодательства Республики Казахстан определяется системой. Если у вас нет действующего сертификата НПА. Вам нужно сдать тестирование на знание гос языка и законов. Онлайн на портале екызмет или же офлайн в зале тестирования записавшись через егов'
  },
  {
    id: 23,
    category: 'Практическая оценка',
    question: 'Когда будет оценка за практический этап?',
    answer: 'Проверка проктором проводится в течение одного следующего рабочего дня. В случае отсутстви нарушений требований Правил кандидатом, в течение одного рабочего дня после объявления результатов проверки проктора непосредственный руководитель структурного подразделения государственного органа вносит в систему итоги этапа практической оценки по форме согласно приложению 2 к настоящим Правилам.'
  },
  {
    id: 24,
    category: 'Сертификат НПА',
    question: 'Не получается откликнуться на вакансию, нет сертификата НПА',
    answer: 'Наличие у кандидата сертификата тестирования на знание государственного языка и законодательства Республики Казахстан определяется системой. Если у вас нет действующего сертификата НПА. Вам нужно сдать тестирование на знание гос языка и законов. Онлайн на портале екызмет или же офлайн в зале тестирования записавшись через егов'
  }
];

export function AIJobChat() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Инициализация чата при первом открытии
  useEffect(() => {
    if (isOpen && !isInitialized) {
      setIsInitialized(true);
      setIsTyping(true);

      setTimeout(() => {
        const welcomeMessage: Message = {
          id: '1',
          type: 'ai',
          content: `Здравствуйте, ${userProfile.name.split(' ')[1]}!\n\nЯ проанализировал ваш профиль в системе eQyzmet:\n\n**Образование:** ${userProfile.education}\n**Опыт работы:** ${userProfile.totalYears} лет\n**Специализация:** ${userProfile.category}\n**Ключевые навыки:** ${userProfile.skills.slice(0, 3).join(', ')}\n\nНа основе вашего профиля я подобрал наиболее подходящие вакансии в осударственной службе:`,
          timestamp: new Date()
        };

        setMessages([welcomeMessage]);

        setTimeout(() => {
          const matchingVacancies = findMatchingVacancies(userProfile);
          
          const vacanciesMessage: Message = {
            id: '2',
            type: 'ai',
            content: `Я нашел ${matchingVacancies.length} вакансий, которые идеально подходят под ваш профиль. Эти позиции требуют навыки в области ${userProfile.category} и опыт от ${Math.floor(userProfile.totalYears)} лет:`,
            vacancyCount: matchingVacancies.length,
            vacancies: matchingVacancies,
            timestamp: new Date()
          };

          setMessages(prev => [...prev, vacanciesMessage]);
          setIsTyping(false);
        }, 1500);
      }, 1000);
    }
  }, [isOpen, isInitialized]);

  const findMatchingVacancies = (profile: UserProfile): Vacancy[] => {
    return vacancies.filter(vacancy => {
      // Проверка категории
      if (vacancy.jobType === profile.category) return true;
      
      // Проверка навыков
      const hasMatchingSkills = profile.skills.some(skill => 
        vacancy.requirements.some(req => req.toLowerCase().includes(skill.toLowerCase()))
      );
      
      return hasMatchingSkills;
    }).slice(0, 3);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Обработка запроса пользователя
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let responseContent = '';
      let responseVacancies: Vacancy[] = [];

      if (lowerInput.includes('алматы') || lowerInput.includes('алмат')) {
        responseVacancies = vacancies.filter(v => v.location === 'Алматы').slice(0, 2);
        responseContent = `Нашел вакансии в городе Алматы, подходящие вашему профилю:`;
      } else if (lowerInput.includes('зарплат') || lowerInput.includes('оклад') || lowerInput.includes('salary')) {
        responseVacancies = vacancies.filter(v => v.salary >= 500000).slice(0, 2);
        responseContent = `Вот вакансии с высокой заработной платой (от 500,000 ₸):`;
      } else if (lowerInput.includes('аналит')) {
        responseVacancies = vacancies.filter(v => v.title.toLowerCase().includes('аналит')).slice(0, 2);
        responseContent = `Специально для вас подобрал ваканси в области аналитики:`;
      } else if (lowerInput.includes('больше') || lowerInput.includes('еще') || lowerInput.includes('другие')) {
        responseVacancies = vacancies.filter(v => 
          !messages.some(m => m.vacancies?.some(mv => mv.id === v.id))
        ).slice(0, 3);
        responseContent = `Вот еще интересные вакансии для вас:`;
      } else {
        responseContent = `Понял ваш запрос. Могу помочь вам:\n\n• Найти вакансии в конкретном городе\n• Подобрать позиции с определенной зарплатой\n• Показать вакансии в нужной области\n• Рассказать подробнее о любой вакансии\n\nЧто именно вас интересует?`;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: responseContent,
        vacancyCount: responseVacancies.length > 0 ? responseVacancies.length : undefined,
        vacancies: responseVacancies,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  // Функция для рендеринга текста с жирным шрифтом
  const renderMessageContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={index} className="font-bold">{part.slice(2, -2)}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-16 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-16 w-16 rounded-full shadow-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(to right, #9810fa, #4f39f6)' }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
              <g>
                <path d={svgPaths.p296ad200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M20 3V7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M22 5H18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M4 17V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M5 18H3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
            {/* AI Badge */}
            <div className="absolute -top-2 -right-1 bg-white rounded-full px-2 py-0.5 shadow-md">
              <span className="text-xs font-bold bg-gradient-to-r from-[#9810fa] to-[#4f39f6] bg-clip-text text-transparent">
                AI
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-16 right-6 w-[446px] h-[600px] bg-white rounded-[14px] flex flex-col overflow-hidden z-50"
          style={{ 
            border: '2px solid #e9d4ff',
            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)'
          }}
        >
          {/* Header */}
          <div 
            className="h-[75px] relative shrink-0"
            style={{ background: 'linear-gradient(to right, #9810fa, #4f39f6)' }}
          >
            <div className="flex items-center justify-between px-4 h-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p296ad200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M20 3V7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M22 5H18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M4 17V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M5 18H3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg leading-[27px] tracking-[-0.4395px]">AI Ассистент eQyzmet</h3>
                  <p className="text-xs text-[#f3e8ff] leading-4">Подбор вакансий по вашему профилю</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <g>
                      <path d="M12 4L4 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M4 4L12 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* User Profile Summary */}
          <div 
            className="h-[37px] px-4 flex items-center relative"
            style={{ 
              background: 'linear-gradient(to right, #faf5ff, #eef2ff)',
              borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.pa568080} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M14.6667 6.66667V10.6667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p34e88d80} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
              <span className="text-sm font-medium text-[#364153] tracking-[-0.1504px]">{userProfile.education.split(' - ')[1]}</span>
              <span className="text-sm text-[#99a1af]">•</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p1c647980} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p13d22180} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
              <span className="text-sm font-medium text-[#364153] tracking-[-0.1504px]">{userProfile.totalYears} лет опыта</span>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="shrink-0 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            {/* FAQ Button */}
            <button
              onClick={() => setIsFaqOpen(!isFaqOpen)}
              className="h-[60px] w-full flex items-center gap-3 px-4 hover:bg-gray-50 transition-colors"
            >
              <div className="size-5 shrink-0">
                <div className="relative size-full">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20" style={{ maskImage: `url('${imgGroup}')`, maskSize: '20px 20px', maskPosition: '-1.667px -1.667px' }}>
                    <g>
                      <path d={svgPathsFaq.p33bc6180} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPathsFaq.p1c08d000} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M9.16667 13.3334H9.17496" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#59168b] text-sm leading-5 tracking-[-0.3008px]">Часто задаваемые вопросы</p>
                <p className="font-medium text-[#8200db] text-xs leading-4">Найдите ответы на популярные вопросы</p>
              </div>
              <div className="size-4 shrink-0">
                <svg 
                  className={`block size-full transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 16 16"
                >
                  <path d={svgPathsFaq.p17838e40} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </button>
          </div>

          {/* FAQ Questions List - Full Screen */}
          {isFaqOpen && (
            <div className="flex-1 overflow-y-auto bg-[#f9fafb]">
              <div className="p-4 space-y-3">
                {faqQuestions.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-[10px] overflow-hidden"
                    style={{ border: '1px solid #e9d4ff' }}
                  >
                    <button
                      onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="inline-block bg-[#f3e8ff] rounded px-2 py-1 mb-2">
                            <span className="font-medium text-[#8200db] text-xs leading-4">{faq.category}</span>
                          </div>
                          <p className="font-medium text-[#101828] text-sm leading-[17.5px] tracking-[-0.1504px]">
                            {faq.question}
                          </p>
                        </div>
                        <div className="size-5 shrink-0 mt-1">
                          <svg 
                            className={`block size-full transition-transform ${openFaqId === faq.id ? 'rotate-180' : ''}`}
                            fill="none" 
                            viewBox="0 0 20 20"
                          >
                            <path d={svgPathsFaq.p12f9fd50} stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66666" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    {openFaqId === faq.id && (
                      <div className="px-4 pb-3 pt-1 bg-[#faf5ff]">
                        <p className="text-sm text-[#4a5565] leading-5">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages - Hidden when FAQ is open */}
          {!isFaqOpen && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f9fafb]" ref={chatContainerRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      message.type === 'user'
                        ? 'bg-[#9810fa] text-white'
                        : 'bg-white'
                    }`}
                    style={message.type === 'ai' ? { border: '1px solid #e5e7eb' } : {}}
                  >
                    {message.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <g clipPath="url(#clip0_22_1269)">
                            <path d={svgPaths.p874e300} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M13.3333 2V4.66667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M14.6667 3.33333H12" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M2.66667 11.3333V12.6667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M3.33333 12H2" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_22_1269">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-xs font-semibold text-[#9810fa]">AI Ассистент</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-line leading-5 tracking-[-0.1504px]">{renderMessageContent(message.content)}</p>
                    
                    {message.vacancyCount && message.vacancyCount > 0 && (
                      <div className="mt-4">
                        <div 
                          className="p-4 rounded-[14px]" 
                          style={{ 
                            background: 'linear-gradient(124.51deg, rgb(250, 245, 255) 0%, rgb(238, 242, 255) 100%)',
                            border: '1px solid #e9d4ff'
                          }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-[#9810fa] rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <g>
                                  <path d={svgPaths.p296ad200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d="M20 3V7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d="M22 5H18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d="M4 17V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d="M5 18H3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-[#59168b] leading-6 tracking-[-0.3125px]">Найдено {message.vacancyCount} подходящих вакансий</p>
                              <p className="text-xs text-[#8200db] leading-4">На основе вашего профиля</p>
                            </div>
                          </div>
                          
                          <div className="mb-4 space-y-1">
                            {message.vacancies?.slice(0, message.vacancyCount).map((v, i) => (
                              <div key={v.id} className="flex items-start gap-2">
                                <span className="text-[#9810fa] font-semibold text-xs">{i + 1}.</span>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-[#101828] leading-5 tracking-[-0.1504px]">{v.title}</p>
                                  <p className="text-xs text-[#4a5565] leading-4">{v.department}</p>
                                  <p className="text-xs text-[#9810fa] font-semibold leading-4">{v.salary.toLocaleString('ru-RU')} тг.</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <button 
                            className="w-full h-9 bg-[#9810fa] hover:bg-[#8200db] text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                            onClick={() => {
                              navigate('/vacancies');
                              setIsOpen(false);
                            }}
                          >
                            <span className="text-sm font-medium tracking-[-0.1504px]">Посмотреть все вакансии</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                              <g>
                                <path d="M6 12L10 8L6 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                    
                    <p className="text-xs opacity-60 mt-2 leading-4">
                      {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl p-3" style={{ border: '1px solid #e5e7eb' }}>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin text-[#9810fa]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm text-gray-600">Анализирую данные...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
          
          {/* Input Area - Hidden when FAQ is open */}
          {!isFaqOpen && (
            <div className="p-4 bg-white" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Спросите о вакансиях..."
                  className="flex-1 h-9 px-3 py-1 bg-[#f3f3f5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#717182] tracking-[-0.1504px] outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity"
                  style={{ 
                    background: '#9810fa',
                    opacity: inputValue.trim() ? 1 : 0.5
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_22_1245)">
                      <path d={svgPaths.p22f0380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M14.5693 1.43133L7.276 8.724" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                    <defs>
                      <clipPath id="clip0_22_1245">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-[#6a7282] mt-2 text-center leading-4">
                Попробуйте: &quot;Покажи вакансии в Алматы&quot; или &quot;Хочу больше зарплату&quot;
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}