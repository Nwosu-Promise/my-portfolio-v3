<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import type { MotionVariants } from "@vueuse/motion";
import { useMouse } from "@/composables/useMouse";

const route = useRoute();

const sections = [
  { 
    "heading": "Introduction",
    "subTexts": ["Sojorne is a parent and family support app designed to help people in need of special care by providing them access to special care providers. It is an empathetic venture to help parents and caregivers of special needs kids navigate care management.", "Efe Odeleye, CEO of Sojorne, had her life changed several years ago when her firstborn was diagnosed with a health condition that would impact her for life. It was a journey filled with countless doctor's appointments, therapy sessions, tears and triumphs, resilience, hope, and the power of innovating Sojorne."]
  },
  { 
    "heading": "Problem Statement",
    "subTexts": ["Our primary aim was to deliver an MVP for the Sojorne project on which it can scale, within the duration of 3 months. This MVP consisted of various modules including providers, communities, admin, customers and dashboard analytics.", "My role on the Sorjone project was to lead the backend team to build a backend application that is scalable, secure, and highly available."]
  },
] 

const solutions = [
  { 
    "heading": "Solution",
    "subTexts": ["Sojorne was built using Agile methodology. The project was broken down into three milestones, and each milestone further broken down into sprints.", "We built the Sorjone project using the <b>monolith architecture</b>. We built features of this system using the object oriented programming paradigm while obeying <i>SOLID principles</i>. That helped our development process become more manageable and modular, making adding and maintaining features easy.",
    "We set up the testing environment with Mocha. We used the JOI package for validating incoming requests. PostgreSQL as our database system. Postman for documenting the API endpoints. Redis as our in-cache memory."
    ]
  },
  { 
    "heading": "Implementation",
    "subTexts": ["The implementation phase is where ideas transform into tangible solutions and as the driving force behind the backend engineering of this project, my role extended beyond just writing code, I worked on designing the system which consists of database design, API design etc.",
    "With the technologies at our disposal, we were able to build the backend system that served both the mobile and web applications."
    ]
  },
]

const infos = [
  { title: "Role", text: "Lead Backend Engineer", icon: "carbon:user-role"},
  { title: "Timeline", text: "3 months", icon: "mdi:chart-timeline-variant-shimmer"},
  { title: "Tools", text: "NodeJS, JavaScript, ExpressJs, Mocha, PostgreSQL, Redis", icon: "ph:code"},
]

const challenges = [
  { 
    "heading": "Challenges",
    "subTexts": ["Embarking on any ambitious project inevitably invites challenges, which creates room for growth and innovation. During the development phase of Sorjorne, we faced challenges that really put our efforts to the test.", "This section reveals some of the hurdles we came across in the development phase of Sorjorne, giving you a glimpse of the ups and downs that needed thoughtful handling."
    ]
  },
]

const challengesList = [
  {
    title: 'Fixing Blank Screen Issue Found on iPhone 🐞',
    url: 'https://blog.egdiala.dev/debugging-chronicles-resolving-the-iphone-blank-screen-bug-in-react'
  },
  {
    title: 'Implementing Dynamic Form Validation 🚀',
    url: '#'
  },
]

const testing = [
  { 
    "heading": "Testing",
    "subTexts": ["While building Sorjone, we adopted the following  testing strategies.",
    ]
  },
]

const testingList = [
  {
    title: 'Unit Testing',
    subText: 'We used this to validate the correctness of individual backend units, such as functions or methods, in isolation.'
  },
  {
    title: 'Integration Testing',
    subText: 'We used this to ensure the seamless collaboration of different backend components and the correct flow of data between them. Maintaining a test coverage of over 80%.'
  },
  {
    title: 'Acceptance Testing',
    subText: 'After each sprint, the team, consisting of backend engineers, frontend engineers, designers, project owners and QA testers, check the work done so far to ensure it meets the user\'s requirements and the app works as expected by end users.'
  },
  {
    title: 'End-to-end Testing',
    subText: 'We used this to validate the overall functionality of the entire backend system, including its interfaces with other systems.'
  },
]

const conclusion = [
  { 
    "heading": "Conclusion",
    "subTexts": ["Sojorne is currently <a class='underline dark:hover:text-white hover:text-zinc-900 content-paragraph' href='https://www.prnewswire.com/news-releases/techstars-atlanta-powered-by-cox-enterprises-announces-2023-class-301878475.html' target='_blank'>backed by Techstars 🎉</a>. The CEO of Sojorne, Efe Odeleye, was very satisfied with the work we did for Sojorne, communication and the way we carried her along with the whole development process. You can watch the review shared by the CEO of Sojorne <a class='underline dark:hover:text-white hover:text-zinc-900 content-paragraph' href='https://www.instagram.com/reel/CydmSaloSvU' target='_blank'>here.</a>✨",
    ]
  },
]

const slides = ["v1700252201/portfolio-v3/work/sojorne/sojorne_create_subcategory.webp", "v1700252204/portfolio-v3/work/sojorne/sojorne_invite_admin.webp", "v1700252202/portfolio-v3/work/sojorne/sojorne_provider_categories.webp", "v1700252209/portfolio-v3/work/sojorne/sojorne_providers_list.webp", "v1699039494/portfolio-v3/work/sojorne/sojorne_dashboard.webp"]

const testImages = ["v1700255932/portfolio-v3/work/sojorne/sojorne_test_coverage_1.webp", "v1700255935/portfolio-v3/work/sojorne/sojorne_test_coverage_2.webp"]

const titleAnimation = () => ({
  initial: {
    y: 24,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 300,
      duration: 800,
    }
  }
})

const paragraphAnimation = () => ({
  initial: {
    y: 24,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 400,
      duration: 800
    }
  }
})

const subTextAnimation = () => ({
  initial: {
    y: 24,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 400,
      duration: 800,
    }
  }
})

const details: MotionVariants = {
  initial: {
    y: 0,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 500,
      duration: 800
    }
  }
}

const headingAnimation = () => ({
  initial: {
    y: 24,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 300,
      duration: 800,
    }
  }
})

const infoAnimation = (i: number) => ({
  initial: {
    y: 24,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      delay: 250*i,
      duration: 800,
    }
  }
})

onMounted(() => {
  useMouse();
  umTrackView(route.path)
  const paragraphTags = document.querySelectorAll('.paragraph')
  const titleTags = document.querySelectorAll('.title')
  const headingTags = document.querySelectorAll('.content-heading')
  const contentParagraphs = document.querySelectorAll('.content-paragraph')
  const infoTags = document.querySelectorAll('.info')

  headingTags.forEach((headTag: any, i: number) => {
      useMotion(headTag, headingAnimation())
  })

  contentParagraphs.forEach((tag: any, i: number) => {
      useMotion(tag, subTextAnimation())
  })

  paragraphTags.forEach((paragraphTag: any, i: number) => {
    useMotion(paragraphTag, paragraphAnimation())
  })

  titleTags.forEach((titleTag: any, i: number) => {
    useMotion(titleTag, titleAnimation())
  })

  infoTags.forEach((infoTag: any, i: number) => {
      useMotion(infoTag, infoAnimation(i))
  })
});
</script>

<template>
  <Container outer-class="mt-14 md:mt-28">
    <div class="dark:text-white text-black mx-auto max-w-7xl px-0">
        <div class="relative px-0 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/work" class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0">
                        <Icon name="heroicons:arrow-left-solid" class="h-4 w-4 text-base stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0 h-full">
      <div class="mx-auto max-w-2xl lg:max-w-5xl">
        <span class="title md:mt-10 block text-center max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 [text-wrap:balance] sm:text-6xl mx-auto">Ready. Set. Live.</span>
        <p class="paragraph my-6 max-w-3xl text-center text-xl text-neutral-600 dark:text-neutral-400 mx-auto">A parent support app designed to help people live their best lives by coordinating tasks that rob them of time and mental space to enjoy their parenting journey.</p>
        <div v-motion="{ initial: details.initial, enter: details.enter }" class="flex items-center justify-center gap-3">
          <span class="text-base text-zinc-400 dark:text-zinc-500">Sojorne</span>
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <time datetime="March 20, 2023" class="flex items-center text-base text-zinc-400 dark:text-zinc-500">
            March 20, 2023
          </time>
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span class="text-base text-zinc-400 dark:text-zinc-500">Backend Application</span>
        </div>
      </div>
    </div>
  </Container>
  <CHero image="v1699039494/portfolio-v3/work/sojorne/sojorne_dashboard.webp" />
  <Container>
    <div v-for="(section, s) in sections" :key="s" class="mx-auto max-w-2xl lg:max-w-3xl">
      <h1 class="content-heading mt-5 mb-2 font-semibold text-xl dark:text-zinc-200 text-zinc-800">{{ section?.heading }}</h1>
      <p v-for="(subText, i) in section?.subTexts" :key="i" class="content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600">{{ subText }}</p>
    </div>
  </Container>
  <Container outer-class="mb-10 md:mb-20">
      <div class="mt-16 sm:mt-20">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li v-for="skill in infos" :key="skill.title" class="info p-6 group relative flex flex-col items-start">
            <div class="relative z-10 flex h-12 w-12 mb-2.5 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Icon :name="skill.icon" class="dark:text-gray-50 text-gray-800 text-xl" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-zinc-50 opacity-100 dark:bg-zinc-800/50 rounded-2xl" />
            <h4 class="relative text-base font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
              {{ skill.title }}
            </h4>
            <p class="relative z-10 mt-1 text-lg text-zinc-800 dark:text-zinc-100 leading-6">
            {{ skill.text }}
            </p>
          </li>
        </ul>
      </div>
  </Container>
  <Container>
    <div v-for="(solution, s) in solutions" :key="s" class="mx-auto max-w-2xl lg:max-w-3xl">
      <h1 class="content-heading mt-5 mb-2 font-semibold text-xl dark:text-zinc-200 text-zinc-800">{{ solution?.heading }}</h1>
      <p v-for="(subText, i) in solution?.subTexts" :key="i" class="content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600" v-html="subText"></p>
    </div>
  </Container>
  <CImplementation :slides="slides" />
  <Container>
    <div v-for="(challenge, c) in challenges" :key="c" class="mx-auto max-w-2xl lg:max-w-3xl">
      <h1 class="content-heading mt-5 mb-2 font-semibold text-xl dark:text-zinc-200 text-zinc-800">{{ challenge?.heading }}</h1>
      <p v-for="(subText, i) in challenge?.subTexts" :key="i" class="content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600" v-html="subText"></p>
    </div>
    <div class="mx-auto max-w-2xl lg:max-w-3xl">
      <ul>
        <li v-for="(item, i) in challengesList" :key="i" :v-umami="`View-${item.title}-Page`" class="italic list-disc list-inside underline dark:hover:text-white hover:text-zinc-900 content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600">
          <NuxtLink :to="item.url" target="_blank">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </Container>
  <Container>
    <div v-for="(test, s) in testing" :key="s" class="mx-auto max-w-2xl lg:max-w-3xl">
      <h1 class="content-heading mt-5 mb-2 font-semibold text-xl dark:text-zinc-200 text-zinc-800">{{ test?.heading }}</h1>
      <p v-for="(subText, i) in test?.subTexts" :key="i" class="content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600" v-html="subText"></p>
    </div>
    <div class="mx-auto max-w-2xl lg:max-w-3xl my-4">
      <ul>
        <li v-for="(item, i) in testingList" :key="i" class="list-disc list-inside content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600">
          <strong>{{ item.title }}:</strong> {{ item.subText }}
        </li>
      </ul>
    </div>
    <div class="mx-auto max-w-2xl lg:max-w-3xl">
      <div class="grid gap-3">
        <div v-for="item in testImages" class="info group overflow-hidden first:rounded-t-xl last:rounded-b-xl h-44">
          <NuxtImg provider="cloudinary" :src="item" :key="item" :alt="item.split('/').at(-1)?.split('.')[0]" preload loading="lazy" class="object-cover scale-105 group-first-of-type:object-left-top group-last-of-type:object-left-bottom w-full h-full" />
        </div>
      </div>
    </div>
  </Container>
  <Container>
    <div v-for="(solution, s) in conclusion" :key="s" class="mx-auto max-w-2xl lg:max-w-3xl">
      <h1 class="content-heading mt-5 mb-2 font-semibold text-xl dark:text-zinc-200 text-zinc-800">{{ solution?.heading }}</h1>
      <p v-for="(subText, i) in solution?.subTexts" :key="i" class="content-paragraph mb-2 text-base dark:text-zinc-400 text-zinc-600" v-html="subText"></p>
    </div>
  </Container>
  <Container outer-class="mt-24 md:mt-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 h-full">
      <Contact />
    </div>
  </Container>
</template>

<style scoped>

.content-doc {
    @apply mx-auto dark:text-zinc-400 text-zinc-600;
}
</style>