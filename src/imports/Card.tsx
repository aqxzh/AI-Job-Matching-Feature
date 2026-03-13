import clsx from "clsx";
import svgPaths from "./svg-3vepo7tdp4";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type IconBackgroundImage2Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage2Props>) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-px whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText1({ text, additionalClassNames = "" }: TextBackgroundImageAndText1Props) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-px whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0">
      <g clipPath="url(#clip0_22_1269)" id="Icon">
        <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_22_1269">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p296ad200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 3V7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 5H18" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 17V19" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 18H3" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <div className="bg-gradient-to-r from-[#9810fa] h-[75px] relative shrink-0 to-[#4f39f6] w-[446px]" data-name="AIJobChat">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
            <BackgroundImage2 additionalClassNames="h-[43px] w-[280.211px]">
              <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <IconBackgroundImage />
                </div>
              </div>
              <ContainerBackgroundImage additionalClassNames="h-[43px]">
                <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">AI Ассистент eQyzmet</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#f3e8ff] text-[12px] top-px whitespace-nowrap">Подбор вакансий по вашему профилю</p>
                </div>
              </ContainerBackgroundImage>
            </BackgroundImage2>
            <BackgroundImage1>
              <IconBackgroundImage2 additionalClassNames="relative shrink-0">
                <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </IconBackgroundImage2>
            </BackgroundImage1>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#faf5ff] h-[37px] relative shrink-0 to-[#eef2ff] w-[446px]" data-name="AIJobChat">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[8px] px-[16px] relative size-full">
            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
              <IconBackgroundImage2 additionalClassNames="relative shrink-0">
                <path d={svgPaths.pa568080} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M14.6667 6.66667V10.6667" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p34e88d80} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </IconBackgroundImage2>
              <TextBackgroundImageAndText text="Информационные технологии" additionalClassNames="w-[209.039px]" />
              <div className="h-[20px] relative shrink-0 w-[6.453px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">•</p>
                </div>
              </div>
              <IconBackgroundImage2 additionalClassNames="relative shrink-0">
                <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </IconBackgroundImage2>
              <TextBackgroundImageAndText text="3.5 лет опыта" additionalClassNames="w-[93.18px]" />
            </div>
          </div>
        </div>
        <div className="bg-white h-[53px] relative shrink-0 w-[446px]" data-name="AIJobChat">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
            <div className="h-[52px] relative shrink-0 w-full" data-name="Button">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_22_1264)" id="Icon">
                        <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p22540600} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_22_1264">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <ContainerBackgroundImage additionalClassNames="h-[36px]">
                    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#59168b] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Часто задаваемые вопросы</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#8200db] text-[12px] top-px whitespace-nowrap">Топ-11 вопросов</p>
                    </div>
                  </ContainerBackgroundImage>
                  <IconBackgroundImage2 additionalClassNames="relative shrink-0">
                    <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </IconBackgroundImage2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[446px]" data-name="AIJobChat">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
              <div className="content-stretch flex h-[374px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-white h-[374px] relative rounded-[16px] shrink-0 w-[351.898px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-px pt-[13px] px-[13px] relative size-full">
                    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
                      <IconBackgroundImage1 />
                      <TextBackgroundImageAndText1 text="AI Ассистент" additionalClassNames="w-[79.273px]" />
                    </div>
                    <div className="h-[300px] relative shrink-0 w-full" data-name="Paragraph">
                      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[302px] whitespace-pre-wrap">
                        <p className="leading-[20px] mb-0">{`Здравствуйте, АКБОТА!  `}</p>
                        <p className="leading-[20px] mb-0">&nbsp;</p>
                        <p className="leading-[20px] mb-0">{`Я проанализировал ваш профиль в системе eQyzmet:  `}</p>
                        <p className="leading-[20px] mb-0">&nbsp;</p>
                        <p className="mb-0">
                          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0a0a0a] tracking-[-0.1504px]">Образование:</span>
                          <span className="leading-[20px]">{` Высшее образование - Информационные технологии `}</span>
                        </p>
                        <p className="mb-0">
                          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0a0a0a] tracking-[-0.1504px]">Опыт работы:</span>
                          <span className="leading-[20px]">{` 3.5 лет`}</span>
                        </p>
                        <p className="mb-0">
                          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0a0a0a] tracking-[-0.1504px]">Специализация:</span>
                          <span className="leading-[20px]">{` IT `}</span>
                        </p>
                        <p className="mb-0">
                          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#0a0a0a] tracking-[-0.1504px]">Ключевые навыки:</span>
                          <span className="leading-[20px]">{` Python, SQL, Аналитика данных  `}</span>
                        </p>
                        <p className="leading-[20px] mb-0">&nbsp;</p>
                        <p className="leading-[20px]">На основе вашего профиля я подобрал наиболее подходящие вакансии в государственной службе:</p>
                      </div>
                    </div>
                    <div className="h-[16px] opacity-60 relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">10:13</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex h-[624px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-white h-[624px] relative rounded-[16px] shrink-0 w-[351.898px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[13px] top-[13px] w-[325.898px]" data-name="Container">
                      <IconBackgroundImage1 />
                      <TextBackgroundImageAndText1 text="AI Ассистент" additionalClassNames="w-[79.273px]" />
                    </div>
                    <div className="absolute h-[60px] left-[13px] top-[37px] w-[325.898px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[306px]">Я нашел 3 вакансий, которые идеально подходят под ваш профиль. Эти позиции требуют навыки в области IT и опыт от 3 лет:</p>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[36px] h-[474px] items-start left-[13px] pl-[17px] pr-px py-[17px] rounded-[14px] top-[113px] w-[325.898px]" data-name="Card" style={{ backgroundImage: "linear-gradient(124.51deg, rgb(250, 245, 255) 0%, rgb(238, 242, 255) 100%)" }}>
                      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <BackgroundImage2 additionalClassNames="h-[64px] w-[291.898px]">
                        <div className="bg-[#9810fa] h-[48px] relative rounded-[16777200px] shrink-0 w-[42.945px]" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
                            <IconBackgroundImage />
                          </div>
                        </div>
                        <ContainerBackgroundImage additionalClassNames="h-[64px]">
                          <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
                            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#59168b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[187px]">Найдено 3 подходящих вакансий</p>
                          </div>
                          <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#8200db] text-[12px] top-px whitespace-nowrap">На основе вашего профиля</p>
                          </div>
                        </ContainerBackgroundImage>
                      </BackgroundImage2>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[291.898px]" data-name="AIJobChat">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                          <div className="content-stretch flex gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
                            <TextBackgroundImageAndText1 text="1." additionalClassNames="w-[9.609px]" />
                            <ContainerBackgroundImage additionalClassNames="h-[88px]">
                              <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[177px]">Специалист по цифровой трансформации</p>
                              </div>
                              <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px w-[211px]">Министерство цифрового развития Республики Казахстан</p>
                              </div>
                              <BackgroundImageAndText text="450 000 тг." />
                            </ContainerBackgroundImage>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
                            <TextBackgroundImageAndText1 text="2." additionalClassNames="w-[11.414px]" />
                            <ContainerBackgroundImage additionalClassNames="h-[84px]">
                              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Аналитик данных</p>
                              </div>
                              <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px w-[270px]">Бюро национальной статистики Агентства по стратегическому планированию и реформам РК</p>
                              </div>
                              <BackgroundImageAndText text="520 000 тг." />
                            </ContainerBackgroundImage>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
                            <TextBackgroundImageAndText1 text="3." additionalClassNames="w-[11.383px]" />
                            <ContainerBackgroundImage additionalClassNames="h-[88px]">
                              <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[190px]">Инженер информационной безопасности</p>
                              </div>
                              <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
                                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px w-[224px]">Комитет национальной безопасности Республики Казахстан</p>
                              </div>
                              <BackgroundImageAndText text="580 000 тг." />
                            </ContainerBackgroundImage>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#9810fa] h-[36px] relative rounded-[8px] shrink-0 w-[291.898px]" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[133.56px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">Посмотреть все вакансии</p>
                          <IconBackgroundImage2 additionalClassNames="absolute left-[231.34px] top-[10px]">
                            <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </IconBackgroundImage2>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[16px] left-[13px] opacity-60 top-[595px] w-[325.898px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px whitespace-nowrap">10:13</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 shrink-0 w-full" data-name="Container" />
            </div>
          </div>
        </div>
        <div className="bg-white h-[109px] relative shrink-0 w-[446px]" data-name="AIJobChat">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[17px] px-[16px] relative size-full">
            <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#f3f3f5] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Input">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Спросите о вакансиях...</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <BackgroundImage1 additionalClassNames="bg-[#9810fa] opacity-50">
                <BackgroundImage additionalClassNames="relative shrink-0">
                  <g clipPath="url(#clip0_22_1245)" id="Icon">
                    <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_1245">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </BackgroundImage>
              </BackgroundImage1>
            </div>
            <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[207.38px] not-italic text-[#6a7282] text-[12px] text-center top-px w-[364px]">{`Попробуйте: "Покажи вакансии в Алматы" или "Хочу больше зарплату"`}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}