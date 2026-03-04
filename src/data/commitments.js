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
];

export const commitments = [
  {
    id: 'oai-nonprofit',
    labId: 'openai',
    title: 'Nonprofit Structure Commitments',
    lastUpdated: '2026-02-15',
    contentOfCommitment: `OpenAI was founded in December 2015 as a nonprofit, with the structure itself presented as core to the mission. The founding announcement stated: "OpenAI is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."[1] It declared that "as a non-profit, our aim is to build value for everyone rather than shareholders,"[1] and affirmed: "we believe the goal and the structure are right."[1]

When OpenAI later created a for-profit subsidiary, it retained nonprofit control and presented this governance structure as the mechanism ensuring safety and the public interest would take priority over commercial pressures. In a February 2023 blog post ("Planning for AGI and beyond"), CEO Sam Altman wrote that OpenAI had "a nonprofit that governs us and lets us operate for the good of humanity (and can override any for-profit interests), including letting us do things like cancel our equity obligations to shareholders if needed for safety."[2]

Three months later, in written Senate testimony, Altman described five governance provisions he said ensured the company "remains focused on this long-term mission": the nonprofit is a 501(c)(3) public charity; the for-profit is "fully controlled by the Nonprofit"; directors owe fiduciary duties to "safe AGI that is broadly beneficial"; the board remains majority independent with independent directors holding no equity; and profit is capped with the nonprofit retaining "all residual value for the benefit of humanity."[3] He told Congress that "AGI technologies are explicitly reserved for the Nonprofit to govern" and that "the Nonprofit's principal beneficiary is humanity, not OpenAI investors."[3]`,
    sources: [
      { text: '"Introducing OpenAI," Brockman, Sutskever, et al., Dec 11, 2015', url: 'https://openai.com/index/introducing-openai/' },
      { text: '"Planning for AGI and beyond," Altman, Feb 24, 2023', url: 'https://openai.com/index/planning-for-agi-and-beyond/' },
      { text: 'Written Senate testimony of Sam Altman, May 16, 2023', url: 'https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Bio%20&%20Testimony%20-%20Altman.pdf' },
    ],
    degreeOfCommitment: `It seems clear that OAI was founded with some kind of commitment about its governance structure as a central piece of its operational principles.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
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
  {
    id: 'deepmind-frontier-safety',
    labId: 'google-deepmind',
    title: 'Frontier Safety Framework',
    lastUpdated: '2026-02-10',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.`,
    grade: 'B+',
    confidence: 0.55,
  },
  {
    id: 'meta-open-source',
    labId: 'meta',
    title: 'Open Source AI Commitment',
    lastUpdated: '2026-01-28',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.`,
    grade: 'A-',
    confidence: 0.7,
  },
  {
    id: 'xai-transparency',
    labId: 'xai',
    title: 'Transparency and Openness',
    lastUpdated: '2026-02-05',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.`,
    grade: 'C-',
    confidence: 0.35,
  },
  {
    id: 'mistral-open-models',
    labId: 'mistral',
    title: 'Open Weight Models Policy',
    lastUpdated: '2026-01-15',
    contentOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
    sources: [],
    degreeOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.`,
    evaluationOfCommitment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.`,
    grade: 'B-',
    confidence: 0.4,
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
