import clsx from "clsx";
import svgPaths from "./svg-byucbudsw5";
import { imgGroup } from "./svg-nejob";
type Container2Props = {
  additionalClassNames?: string;
};

function Container2({ children, additionalClassNames = "" }: React.PropsWithChildren<Container2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ children, additionalClassNames = "" }: React.PropsWithChildren<IconProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("bg-white relative rounded-[10px] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
type ParagraphText6Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText6({ text, additionalClassNames = "" }: ParagraphText6Props) {
  return (
    <div className={clsx("absolute h-[35px] left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[270px]">{text}</p>
    </div>
  );
}
type ParagraphText5Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText5({ text, additionalClassNames = "" }: ParagraphText5Props) {
  return (
    <div className={clsx("absolute h-[17.5px] left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText4({ text, additionalClassNames = "" }: ParagraphText4Props) {
  return (
    <div className={clsx("absolute h-[52.5px] left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[318px]">{text}</p>
    </div>
  );
}
type ParagraphText3Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText3({ text, additionalClassNames = "" }: ParagraphText3Props) {
  return (
    <div className={clsx("absolute h-[35px] left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[271px]">{text}</p>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText2({ text, additionalClassNames = "" }: ParagraphText2Props) {
  return (
    <div className={clsx("absolute left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[343px]">{text}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
      <div className="absolute inset-[-16.67%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66666">
          <g id="Group">
            <path d={svgPaths.p12f9fd50} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66666" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText1({ text, additionalClassNames = "" }: ParagraphText1Props) {
  return (
    <div className={clsx("absolute h-[70px] left-0 top-[33.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[342px]">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("absolute bg-[#f3e8ff] h-[24px] left-0 rounded-[4px] top-[1.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#8200db] text-[12px] top-[5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[20px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.3008px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#f3e8ff] text-[12px] top-px whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[27px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.5px] tracking-[-0.879px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function AiJobChat() {
  return (
    <div className="bg-white border-2 border-[#e9d4ff] border-solid overflow-clip relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="AIJobChat">
      <div className="absolute bg-gradient-to-r content-stretch flex from-[#9810fa] h-[75px] items-center justify-between left-0 px-[16px] to-[#4f39f6] top-0 w-[442px]" data-name="Container">
        <div className="h-[43px] relative shrink-0 w-[280.211px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
            <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <Icon additionalClassNames="size-[24px]">
                  <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Group">
                    <div className="absolute inset-[-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0005 22.0005">
                        <g id="Group">
                          <path d={svgPaths.p3e028600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M18.9985 2.00025V6.00025" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M20.9985 4.00025H16.9985" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M2.99848 16.0002V18.0002" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M3.99848 17.0002H1.99848" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </Icon>
              </div>
            </div>
            <Container1 additionalClassNames="h-[43px]">
              <HeadingText text="AI Ассистент eQyzmet" />
              <ParagraphText text="Подбор вакансий по вашему профилю" />
            </Container1>
          </div>
        </div>
        <Container2 additionalClassNames="h-[36px] w-[80px]">
          <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[10px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
              <Icon additionalClassNames="size-[16px]">
                <div className="absolute inset-1/4" data-name="Group">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                      <g id="Group">
                        <path d={svgPaths.p31ac93c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p1c3aed40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </div>
              </Icon>
            </div>
          </div>
        </Container2>
      </div>
      <div className="absolute bg-gradient-to-r content-stretch flex from-[#faf5ff] h-[37px] items-center left-0 pb-px pl-[16px] to-[#eef2ff] top-[75px] w-[442px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
        <div className="h-[20px] relative shrink-0 w-[366.953px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <Icon additionalClassNames="size-[16px]">
              <div className="absolute inset-[20.83%_8.27%_20.83%_8.34%]" data-name="Group">
                <div className="absolute inset-[-7.14%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6767 10.6669">
                    <g id="Group">
                      <path d={svgPaths.p28fa8980} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M13.9992 4.00023V8.00027" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p37547d80} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </div>
              </div>
            </Icon>
            <TextText text="Информационные технологии" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
            <Wrapper additionalClassNames="w-[6.453px]">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">•</p>
            </Wrapper>
            <Icon additionalClassNames="size-[16px]">
              <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Group">
                <div className="absolute inset-[-5.56%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.3333">
                    <g id="Group">
                      <path d={svgPaths.p1c25a780} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.pd786d70} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </div>
              </div>
            </Icon>
            <TextText text="3.5 лет опыта" additionalClassNames="shrink-0 w-[91.219px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[484px] items-start left-0 overflow-clip top-[112px] w-[442px]" data-name="Container">
        <div className="h-[60px] relative shrink-0 w-[442px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
            <Icon additionalClassNames="size-[20px]">
              <div className="absolute contents inset-0" data-name="Clip path group">
                <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.667px_-1.667px] mask-size-[20px_20px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                      <g id="Group">
                        <path d={svgPaths.p33bc6180} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p1c08d000} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M9.16667 13.3334H9.17496" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Icon>
            <Container1 additionalClassNames="h-[36px]">
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#59168b] text-[14px] top-[0.5px] tracking-[-0.3008px] whitespace-nowrap">Часто задаваемые вопросы</p>
              </div>
              <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#8200db] text-[12px] top-px whitespace-nowrap">Топ-10 вопросов</p>
              </div>
            </Container1>
            <Icon additionalClassNames="size-[16px]">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Group">
                <div className="absolute inset-[-16.67%_-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
                    <g id="Group">
                      <path d={svgPaths.p17838e40} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </div>
              </div>
            </Icon>
          </div>
        </div>
        <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[442px]" data-name="Container">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative size-full">
              <div className="h-[1120px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] px-[16px] relative size-full">
                  <Container additionalClassNames="h-[129.5px]">
                    <div className="h-[127.5px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[103.5px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                        <ParagraphText1 text="Я сдавал(а) тесты на оценку личных качеств и на знание законодательства РК (сертификат у меня есть) в Центре тестирования, зачем мне повторно сдавать ОЛК?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[112px]">
                    <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[86px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Подача заявок" additionalClassNames="w-[104.836px]" />
                        <ParagraphText2 text="Что означает сообщение: К сожалению, Вы не соответствуете квалификационным требованиям должности" additionalClassNames="h-[52.5px] w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[94.5px]">
                    <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                        <ParagraphText2 text="Не пришло уведомление о записи на второй этап /следующий этап?" additionalClassNames="h-[35px] w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[94.5px]">
                    <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                        <ParagraphText3 text="Как проходят этапы отбора, где можно посмотреть информацию?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[112px]">
                    <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[86px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Технические вопросы" additionalClassNames="w-[149.273px]" />
                        <ParagraphText4 text="Из–за большого объема информации не могу прикрепить трудовую книгу. Как загрузить документ?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[112px]">
                    <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[86px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                        <div className="absolute h-[52.5px] left-0 top-[33.5px] w-[348px]" data-name="Paragraph">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[346px]">Почему система фиксирует нарушения: «потерян фокус экрана», «отсутствие лица» и т.д. если с моей стороны не было нарушений</p>
                        </div>
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[77px]">
                    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[51px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                        <ParagraphText5 text="Как я могу отменить запись на тестирование?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[77px]">
                    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[51px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                        <ParagraphText5 text="Сколько человек допускаются на собеседование?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[94.5px]">
                    <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                        <ParagraphText6 text="Что означает сообщение: Отсутствуют свободные даты для тестирования" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                  <Container additionalClassNames="h-[77px]">
                    <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
                      <div className="absolute h-[51px] left-[16px] top-[12px] w-[348px]" data-name="Container">
                        <TextText1 text="Подача заявок" additionalClassNames="w-[104.836px]" />
                        <ParagraphText5 text="Каким образом могу подать на аппеляцию?" additionalClassNames="w-[348px]" />
                      </div>
                      <div className="absolute left-[372px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                        <Group />
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[596px] items-start left-[442px] p-[2px] rounded-[14px] top-0 w-[442px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-2 border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="bg-gradient-to-r from-[#9810fa] h-[75px] relative shrink-0 to-[#4f39f6] w-[438px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[16px] pr-[250.664px] relative size-full">
            <Container2 additionalClassNames="h-[43px] w-[171.336px]">
              <Container1 additionalClassNames="h-[43px]">
                <HeadingText text="Справочный центр" />
                <ParagraphText text="Все ответы на ваши вопросы" />
              </Container1>
            </Container2>
          </div>
        </div>
        <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[438px]" data-name="Container">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
              <div className="content-stretch flex flex-col gap-[12px] h-[1105.5px] items-start relative shrink-0 w-full" data-name="Container">
                <Container additionalClassNames="h-[129.5px]">
                  <div className="h-[127.5px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[103.5px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                      <ParagraphText1 text="Я сдавал(а) тесты на оценку личных качеств и на знание законодательства РК (сертификат у меня есть) в Центре тестирования, зачем мне повторно сдавать ОЛК?" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[112px]">
                  <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[86px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Подача заявок" additionalClassNames="w-[104.836px]" />
                      <ParagraphText2 text="Что означает сообщение: К сожалению, Вы не соответствуете квалификационным требованиям должности" additionalClassNames="h-[52.5px] w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[94.5px]">
                  <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                      <ParagraphText2 text="Не пришло уведомление о записи на второй этап /следующий этап?" additionalClassNames="h-[35px] w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[94.5px]">
                  <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                      <ParagraphText3 text="Как проходят этапы отбора, где можно посмотреть информацию?" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[112px]">
                  <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[86px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Технические вопросы" additionalClassNames="w-[149.273px]" />
                      <ParagraphText4 text="Из–за большого объема информации не могу прикрепить трудовую книгу. Как загрузить документ?" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[112px]">
                  <div className="h-[110px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[86px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                      <div className="absolute h-[52.5px] left-0 top-[33.5px] w-[344px]" data-name="Paragraph">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[324px]">Почему система фиксирует нарушения: «потерян фокус экрана», «отсутствие лица» и т.д. если с моей стороны не было нарушений</p>
                      </div>
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[77px]">
                  <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[51px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                      <ParagraphText5 text="Как я могу отменить запись на тестирование?" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[94.5px]">
                  <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Процесс отбора" additionalClassNames="w-[113.969px]" />
                      <div className="absolute h-[35px] left-0 top-[33.5px] w-[344px]" data-name="Paragraph">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[230px]">Сколько человек допускаются на собеседование?</p>
                      </div>
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[94.5px]">
                  <div className="h-[92.5px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[68.5px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Тестирование" additionalClassNames="w-[100.883px]" />
                      <ParagraphText6 text="Что означает сообщение: Отсутствуют свободные даты для тестирования" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="h-[77px]">
                  <div className="h-[75px] relative shrink-0 w-full" data-name="Button">
                    <div className="absolute h-[51px] left-[16px] top-[12px] w-[344px]" data-name="Container">
                      <TextText1 text="Подача заявок" additionalClassNames="w-[104.836px]" />
                      <ParagraphText5 text="Каким образом могу подать на аппеляцию?" additionalClassNames="w-[344px]" />
                    </div>
                    <div className="absolute left-[368px] overflow-clip size-[20px] top-[16px]" data-name="Icon">
                      <Group />
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[73px] relative shrink-0 w-[438px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
            <div className="bg-[#9810fa] content-stretch flex gap-[8px] h-[40px] items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="Button">
              <Icon additionalClassNames="size-[16px]">
                <div className="absolute bottom-[6.25%] left-[43.75%] right-1/4 top-[31.25%]" data-name="Group">
                  <div className="absolute inset-[-6.67%_-13.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.33333 11.3333">
                      <g id="Group">
                        <path d={svgPaths.p39af1c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </div>
              </Icon>
              <Wrapper additionalClassNames="w-[117.906px]">
                <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[59px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Вернуться к чату</p>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}