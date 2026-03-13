import clsx from "clsx";
import svgPaths from "./svg-v7609r4glt";
import { imgGroup } from "./svg-dxh3b";
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

export default function Button() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full" data-name="Button">
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
      <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#59168b] text-[14px] top-[0.5px] tracking-[-0.3008px] whitespace-nowrap">Часто задаваемые вопросы</p>
          </div>
          <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#8200db] text-[12px] top-px whitespace-nowrap">Топ-10 вопросов</p>
          </div>
        </div>
      </div>
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
  );
}