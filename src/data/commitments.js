export const labs = [
  {
    id: 'openai',
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png',
    color: '#10a37f',
    overallGrade: 'D',
    overallConfidence: 0.7,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. OpenAI has made several high-profile commitments regarding its nonprofit governance structure and safety practices. Adherence to these commitments has been mixed at best, with significant restructuring away from the original nonprofit model.',
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/512px-Anthropic_logo.svg.png',
    color: '#d4a574',
    overallGrade: 'B',
    overallConfidence: 0.6,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Anthropic has published and updated its Responsible Scaling Policy. Early indications suggest reasonable adherence, though the framework is still relatively new and untested at the highest capability levels.',
  },
  {
    id: 'google-deepmind',
    name: 'Google DeepMind',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DeepMind_new_logo.svg/250px-DeepMind_new_logo.svg.png',
    color: '#4285f4',
    overallGrade: 'B+',
    overallConfidence: 0.55,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Google DeepMind has published a Frontier Safety Framework and has generally maintained a research-oriented posture. Evaluation is complicated by the relationship between DeepMind and the broader Google organization.',
  },
  {
    id: 'meta',
    name: 'Meta AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png',
    color: '#0668e1',
    overallGrade: 'A-',
    overallConfidence: 0.7,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meta has committed to open-sourcing its AI models and has largely followed through with the Llama family of models. The scope and limits of this openness continue to evolve.',
  },
  {
    id: 'xai',
    name: 'xAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/XAI-Logo.svg/120px-XAI-Logo.svg.png',
    color: '#000000',
    overallGrade: 'C-',
    overallConfidence: 0.35,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. xAI has made broad claims about transparency and openness. Evaluation is difficult given the relatively short track record and limited public documentation of specific commitments.',
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/250px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png',
    color: '#f54e42',
    overallGrade: 'B-',
    overallConfidence: 0.4,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mistral has positioned itself around open-weight model releases. The commitment has been partially maintained, with some newer models being released under more restrictive terms.',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/250px-DeepSeek_logo.svg.png',
    color: '#4D6BFE',
    overallGrade: 'C',
    overallConfidence: 0.3,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. DeepSeek has emerged as a significant player in open-weight AI model development. Evaluation of commitments is preliminary given the lab\'s relatively recent rise to prominence and limited public commitment documentation.',
  },
];

export const commitments = [
  {
    id: 'oai-nonprofit',
    labId: 'openai',
    title: 'Nonprofit Structure Commitments',
    lastUpdated: '2026-02-15',
    contentOfCommitment: `OpenAI was founded in December 2015 as a nonprofit, with the structure itself presented as core to the mission. The founding announcement stated: "OpenAI is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."[1] It declared that "as a non-profit, our aim is to build value for everyone rather than shareholders,"[1] and affirmed: "we believe the goal and the structure are right."[1]

When OpenAI later created a for-profit subsidiary, it retained nonprofit control and presented this governance structure as the mechanism ensuring safety and the public interest would take priority over commercial pressures. In a February 2023 blog post ("Planning for AGI and beyond"), CEO Sam Altman wrote that OpenAI had "a nonprofit that governs us and lets us operate for the good of humanity (and can override any for-profit interests), including letting us do things like cancel our equity obligations to shareholders if needed for safety."[2]

Three months later, in written testimony before the Senate Subcommittee on Privacy, Technology, and the Law, Altman described five governance provisions he said ensured the company "remains focused on this long-term mission": the nonprofit is a 501(c)(3) public charity; the for-profit is "fully controlled by the Nonprofit"; directors owe fiduciary duties to "safe AGI that is broadly beneficial"; the board remains majority independent with independent directors holding no equity; and profit is capped with the nonprofit retaining "all residual value for the benefit of humanity."[3] He told Congress that "AGI technologies are explicitly reserved for the Nonprofit to govern" and that "the Nonprofit's principal beneficiary is humanity, not OpenAI investors."[3]`,
    sources: [
      { text: '\u201CIntroducing OpenAI,\u201D Brockman, Sutskever, et al., Dec 11, 2015', url: 'https://openai.com/index/introducing-openai/' },
      { text: '\u201CPlanning for AGI and beyond,\u201D Altman, Feb 24, 2023', url: 'https://openai.com/index/planning-for-agi-and-beyond/' },
      { text: 'Written Senate testimony of Sam Altman, May 16, 2023', url: 'https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Bio%20&%20Testimony%20-%20Altman.pdf' },
    ],
    evaluationSources: [
      { text: 'OpenAI board statement, Nov 17, 2023, via Wikipedia', url: 'https://en.wikipedia.org/wiki/Removal_of_Sam_Altman_from_OpenAI' },
      { text: 'NPR, \u201COpenAI reinstates Sam Altman as its chief executive,\u201D Nov 22, 2023', url: 'https://www.npr.org/2023/11/22/1214621010/openai-reinstates-sam-altman-as-its-chief-executive' },
      { text: 'TIME, \u201CSam Altman Returns as OpenAI CEO. Here\u2019s How It Happened,\u201D Nov 22, 2023', url: 'https://time.com/6338789/sam-altman-openai-return-timeline/' },
      { text: 'PitchBook, \u201COpenAI\u2019s Altman reinstated as CEO,\u201D Nov 22, 2023', url: 'https://pitchbook.com/news/articles/openai-sam-altman-reinstatement' },
      { text: 'CNBC, \u201CFormer OpenAI board member explains why CEO Sam Altman got fired,\u201D May 29, 2024', url: 'https://www.cnbc.com/2024/05/29/former-openai-board-member-explains-why-ceo-sam-altman-was-fired.html' },
      { text: 'PR Week, \u201CHow Sam Altman ran circles around OpenAI\u2019s board on social media,\u201D Nov 27, 2023', url: 'https://www.prweek.com/article/1849160/sam-altman-ran-circles-around-openais-board-social-media' },
      { text: 'India TV News, \u201CSam Altman\u2019s ouster to reinstatement,\u201D Nov 22, 2023', url: 'https://www.indiatvnews.com/technology/news/sam-altman-s-ouster-to-reinstatement-the-chaos-at-openai-explained-in-5-points-2023-11-22-903860' },
      { text: 'The Hill, \u201CSam Altman reinstated to OpenAI board after investigation,\u201D Mar 9, 2024', url: 'https://thehill.com/policy/technology/4520331-sam-altman-reinstated-to-openai-board-after-investigation/' },
      { text: 'Written Senate testimony of Sam Altman, May 16, 2023', url: 'https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Bio%20&%20Testimony%20-%20Altman.pdf' },
      { text: '\u201CPlanning for AGI and beyond,\u201D Altman, Feb 24, 2023', url: 'https://openai.com/index/planning-for-agi-and-beyond/' },
      { text: 'Reuters, \u201COpenAI to remove non-profit control and give Sam Altman equity,\u201D Dec 2024 (via multiple outlets)', url: '' },
      { text: 'Bloomberg Law, \u201COpenAI Conversion Sheds Nonprofit Purpose Without Justification,\u201D Feb 13, 2025', url: 'https://news.bloomberglaw.com/us-law-week/openai-conversion-sheds-nonprofit-purpose-without-justification' },
      { text: 'TechCrunch, \u201COpenAI reverses course, says its nonprofit will remain in control,\u201D May 5, 2025', url: 'https://techcrunch.com/2025/05/05/openai-reverses-course-says-its-nonprofit-will-remain-in-control-of-its-business-operations/' },
      { text: 'OpenAI, \u201COur structure\u201D', url: 'https://openai.com/our-structure/' },
      { text: 'EA Forum, \u201CThe End of OpenAI\u2019s Nonprofit Era,\u201D Oct 29, 2025', url: 'https://forum.effectivealtruism.org/posts/rrPGEvvKSqFqd2bzQ/the-end-of-openai-s-nonprofit-era' },
      { text: 'The OpenAI Files \u2014 Restructuring Concerns', url: 'https://openaifiles.org/restructuring' },
      { text: 'Fortune, \u201COpenAI changed its mission statement 6 times in 9 years,\u201D Feb 23, 2026', url: 'https://fortune.com/2026/02/23/openai-mission-statement-changed-restructuring-forprofit-business/' },
    ],
    degreeOfCommitment: `The founding document does not actually use promise-like language.[1] It says that the authors think the current structure and goals are correct, which is a statement about their current beliefs at the time of writing, not about what the org will do in the future. Sam Altman did not make an explicit promise in his testimony to Congress or in the blogpost either.[2] [3]

But the function of Altman\u2019s Senate testimony was to reassure Congress that external regulation wasn\u2019t needed \u2014 he was asking for regulatory forbearance on the basis of structural safeguards. When you tell a Senate subcommittee \u201Chere are five provisions that ensure we stay focused on our mission,\u201D you are staking your credibility on those provisions continuing to exist. That\u2019s doing the work of a commitment whether or not it\u2019s technically one.

So the degree of commitment is murky. That said, I would not like to reward low-integrity actors by assessing them more favorably when they skillfully make it seem like they made a commitment without explicitly ever committing. Committing and having explicit fine print would be better by my standards \u2014 at least then one could look back and say that the commitment was broken and evaluate the escape clauses.

On the question of how much was there a commitment made by either OpenAI or Sam Altman: by letter I think very little, but in spirit a fair bit. I think this should count against them rather than in favor.`,
    evaluationOfCommitment: `Things look pretty bad.

## Board Fires Sam Altman Incident

A few months after Altman\u2019s testimony, the board tried to exercise its governance duties by firing Altman, concluding he was \u201Cnot consistently candid in his communications.\u201D[1] They did legally fire him, but through a mixture of A) being hired at Microsoft,[2] B) threats of general employee revolt,[3] and C) flipping key employees on the decision of whether he should be fired,[3] Sam Altman was reinstated as CEO five days later and had all of the board replaced.[4]

Former board member Helen Toner later said on a podcast that the board\u2019s action was not impulsive \u2014 that \u201Cfor years, Sam had made it really difficult for the board to actually do that job by withholding information, misrepresenting things that were happening at the company, in some cases outright lying to the board.\u201D[5] She said Altman gave the board \u201Cinaccurate information about the small number of formal safety processes that the company did have in place\u201D on multiple occasions.[5]

Sam Altman was clearly fairly agentic in these events. That Saturday, he held a gathering of employees at his residence.[3] The Sunday after, he met with the board and posted with a guest badge on X saying \u201Cfirst and last time I ever wear one of these.\u201D[6] Later that same day he demanded that the board resign.[7] After being hired by Microsoft on Monday,[2] he posted a rallying tweet: \u201Cwe have more unity and commitment and focus than ever before. we are all going to work together some way or other, and i\u2019m so excited. one team, one mission.\u201D[6] OpenAI employees \u201Cover the weekend had been engaged in a coordinated show of support for Altman and Brockman on X\u201D and \u201Cbegan to tweet the same phrase suggesting they might leave en-masse: \u2018OpenAI is nothing without its people.\u2019\u201D[3]

Altman didn\u2019t directly ask the public to trust him because the board could remove him, but he did say many things that were peppered with that sentiment.[9] [10] He argued that the board\u2019s fiduciary duty to humanity \u201Censures\u201D the organization stays focused on its mission.[9] He wrote that the nonprofit \u201Ccan override any for-profit interests.\u201D[10] When the board attempted to use that authority, he did not treat it as a governance safeguard working as intended. He hosted employees at his residence, ran an X campaign, posted rallying messages, demanded the board\u2019s resignation, and was reinstated with those board members removed. He then returned to the board himself by March 2024.[8]

In other words: he asked the public to trust OpenAI because the board could override him, and then when the board tried to override him, he overrode the board.

## Sam Altman Tries To Get The For-Profit To Be Independent Incident

In December 2024, OpenAI proposed restructuring so that the nonprofit would lose its controlling stake and become merely a large shareholder in a new for-profit public benefit corporation.[11] Legal scholars argued the plan would \u201Crelieve the operational subsidiary of its duty to advance the nonprofit purposes.\u201D[12] After backlash from former employees, Nobel laureates, civic organizations, and scrutiny from the California and Delaware attorneys general, OpenAI reversed course in May 2025, announcing the nonprofit would retain control.[13]

## The final structure (October 2025)

On October 28, 2025, OpenAI completed its restructuring.[14] Several of the specific safeguards Altman cited to Congress were altered or removed:

Profit caps: The binding profit caps Altman described as preventing OpenAI from being \u201Cincentivized to attempt to capture value without bound\u201D[10] were abolished.[15] It was separately reported that OpenAI had already quietly modified the caps in 2023 to increase by 20% per year starting in 2025, without public disclosure.[16]

Nonprofit ownership: The nonprofit previously owned 100% of the for-profit subsidiary. Under the new structure, the OpenAI Foundation holds 26% equity, while Microsoft holds 27% and employees and other investors hold 47%.[14]

Nonprofit control: The Foundation retains governance rights including appointing and removing PBC board members, and OpenAI characterizes this as the nonprofit remaining \u201Cin control.\u201D However, all current Foundation directors also serve on the for-profit board, limiting independence.[15]

AGI reserved for the nonprofit: Altman told Congress that \u201CAGI technologies are explicitly reserved for the Nonprofit to govern.\u201D[9] Under the new structure, the for-profit PBC operates the technology directly; the Foundation\u2019s relationship to AGI is through its equity stake and board appointment power rather than direct ownership.[14]

Mission statement: OpenAI changed its mission statement six times across nine IRS filings, and in its 2025 Form 990 removed all references to safety from the mission language.[17]

The OpenAI Files project, compiled by the Midas Project and the Tech Oversight Project, summarized the trajectory: the nonprofit board \u201Ctried to exercise control of its for-profit subsidiary by firing Sam Altman, but was thwarted,\u201D and the restructuring means \u201Cprofit motives are no longer subordinate to OpenAI\u2019s charitable purpose.\u201D[16]`,
    grade: 'F',
    confidence: 0.85,
  },
  {
    id: 'anthropic-rsp',
    labId: 'anthropic',
    title: 'RSP Commitments',
    lastUpdated: '2026-01-20',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.`,
    grade: 'B',
    confidence: 0.6,
  },
  {
    id: 'oai-20-compute',
    labId: 'openai',
    title: '20% of Compute to Safety Work',
    lastUpdated: '2026-02-01',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.`,
    grade: 'D',
    confidence: 0.45,
  },
  {
    id: 'oai-rsp-equiv',
    labId: 'openai',
    title: 'RSP Equivalent (Preparedness Framework)',
    lastUpdated: '2026-01-10',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.`,
    grade: 'C',
    confidence: 0.5,
  },
];

export const aboutText = {
  whatIsThisSite: `Hello! I am Ronny Fernandez (often known online as Brangus). I care about the future going well and think that the development of AI might well determine how the rest of all of everything goes forever. As such, I would like for there to be some publicly neutral place that keeps track of the commitments made by the people who are building these things and evaluates how well those commitments are being adhered to. This could easily be a full time job, and I already have another full time job I currently consider to be a better use of my time. Even if this were my full time job, many of this the things on this site could well be wrong, either in matters of fact or in matters of framing. As such, I will do my best to get feedback on all of the content that ends up on this site. I will make it easy for you to give me feedback (including anonymously at this site here).

The general structure of the site (at least for now) is as follows: For each lab that I am tracking, I will look at commitments made by those labs and write up a report on that commitment. Each report will contain a section that explains the content of the commitment, the extent to which this really was committed to and by what entities, and an evaluation of how the behaviors of relevant entities has adhered to that commitment. I will also maintain a track record for each lab, but I expect this to remain somewhat skimpy for the foreseeable future unless I either am offered a surprisingly large amount of money to maintain this site, or I am able to find collaborators who contribute to this site more usefully than I currently imagine possible.

Here is a commitment I make: Anything that ends up on this site will be my current--all things considered--best guess of the state of things and how they went down, as of the "last updated" date for each entry. All final responsibility for what ends up on this site ends with me. I will in general do my best to make sure that all of my claims here come with appropriate indicators of confidence. I will do my best to make all of my reasoning transparent whenever I can.

As a disclosure: LLMs were used at many points in the making of this website and also in doing the research and some of the writing for each individual entry. This is not marked clearly for now, but you can use Pangram to check it out yourself if you would like.`,
  philosophy: `It is not clear to what extent organizations are the sorts of entities that can take on commitments. They certainly don't seem like the sort of entity that can hold beliefs, and people sometimes treat them as if they are anyway much to the frustration of people within those organizations. Different people within an organization may have genuinely different attitudes about the extent to which an organization has committed to some policy, and the actions of different individuals within an organization may be more inline with some interpretation of their public communications about commitments than others. For instance, A may have always noticed the fine print in a document and always thought that that fine print was an important part of what the org was committed to, and B may have not noticed that and yelled at people who said that the commitment had no real teeth. Things are complicated, and orgs having commitments is a strange and messy business.

I am still going to index commitments by orgs and still assess them as if they are commitments made by orgs, but I will tend to look at statements made by individuals, and favor pointing out when the statements made by an individual are inconsistent with their later actions. There is a useful sense in which you can track the ability of an org to stick to its commitments, but I think it is also important to keep in mind that talk of orgs making commitments is a sort of metaphorical shorthand, even when the people who write the copy for those orgs forget that fact (or are unaware of it in the first place). Probably what you are tracking when you track the integrity of an org is some combination of the integrity of the individuals who make up its leadership, the integrity of those who are responsible for its public communications, and something about the strength of its governing institutions. This seems worth tracking, but again, it is important to remember that orgs do not have minds, and the guilt and innocence of individuals within those orgs should be evaluated on a case by case basis. I would write the same about the nazis or the bolsheviks or any org, really.`,
  philosophyGrades: {
    intro: `You may well have at some point asked yourself "wtf does a grade of B- mean and what the fuck does a confidence of 55% mean?" To be honest with you, I am not really sure myself as of Mar 3, 2026. I'm currently going with something like "if I had had many centuries to reflect on what the letter grades should mean, and also assign grades, what grade would I have assigned". The confidence means something like "how likely do I think that the output of that process would be the letter grade I put down or quite close to it, like a half or whole letter grade away". This isn't very useful however for you as a consumer of my evaluations, and that's why I have the longer essay form evaluations.

Some things that go into my process for picking a grade include:`,
    bullets: [
      'How real was the commitment?',
      'How unified was the org in thinking of this as a commitment?',
      'How much were the mitigating circumstances that made it make sense to lapse on the commitment?',
      'How much did public communications from the org or employees at the org reify the commitment?',
      'How vague was the initial commitment?',
      'How much did they adhere to the spirit of the commitment?',
      'How much did they adhere to the letter of the commitment?',
      'How much do I think that I or a smarter higher integrity friend of mine could do better?',
      'How much of the PR that the org or individuals at the org did for this commitment focus on commitmenty parts of it vs on the escape valve part of it (if there was one)?',
      'How sad does the org or its leadership seem about breaking the commitment?',
      'How much do I think I should update down on the ability of the org or employee or whatever to adhere to future commitments as a result of this particular breach?',
      'And presumably many other things that I am not aware of and that I am not currently very articulate about.',
    ],
    outro: `What goes into my summary grade and confidence in the overall trackrecord and takes section is even more complicated and inarticulate, so I will just include some copy with each one explaining what my take is in words, what caused it, and what my confidence is in that take overall.

Perhaps at some future time I will have a better more programmatic way to assign summary grades to the commitments, or to the labs as a whole, but I suspect I will not. There is something useful about having a programmatic way of assigning grades, which is that it does not depend on the judgment of any individual, but there is also something useful about giving the grade you think is probably best, which is that it more clearly communicates my current overall best guess including the parts of it that are inarticulate or vague.

Ignoring the grades, credences, track records, and takes and just reading the content in the commitment entry is a fine and good way to engage with this site.`,
  },
};
