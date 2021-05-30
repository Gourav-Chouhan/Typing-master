let para = `"Better by far you should forget and smile Than that you should remember and be sad."
- Christina Rossetti

"Can I see another's woe,
And not be in sorrow too?
Can I see another's grief,
And not seek for kind relief?"
- William Blake

"Do not stand at my grave and cry;
I am not there. I did not die."
- Mary Elizabeth Frye

"Don't hate the player hate the game."
- Ice T

"Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain.
And could you keep your heart in wonder at the daily miracles of your life, your pain would not seem less wondrous than your joy;"
- Kahlil Gibran

"I feel your pain the pain in knowing this has
Happened to you. The pain in knowing what more
tears we have gained. But through all this I feel your pain"
- Octavia B. Hawkins-Richardson

"If you try to please audiences, uncritically accepting their tastes, it can only mean that you have no respect for them"
- Andrei Tarkovsky

"I feel within me a peace above all earthly dignities, a still and quiet conscience."
- William Shakespeare

"In the end… We only regret the chances we didn’t take"
- Lewis Carroll

"I stand amid the roar
Of a surf-tormented shore,
And I hold within my hand
Grains of the golden sand —
How few! yet how they creep
Through my fingers to the deep,
While I weep — while I weep!
O God! Can I not grasp
Them with a tighter clasp?
O God! can I not save
One from the pitiless wave?
Is all that we see or seem
But a dream within a dream?"
- Edgar Allan Poe

"Laugh, and the world laughs with you;
Weep, and you weep alone;
For the sad old earth must borrow its mirth,
But has trouble enough of its own."
- Ella Wheeler Wilcox

"LIFE is a mosaic of pleasure and pain - grief is an interval between two moments of joy. Peace is the interlude between two wars. You have no rose without a thorn; the diligent picker will avoid the pricks and gather the flower."
- Sathya Sai Baba

"Of all sad words of tongue or pen, the saddest are these, 'It might have been."
- John Greenleaf Whittier

"Oft expectation fails, and most oft there
Where most it promises; and oft it hits
Where hope is coldest, and despair most fits."
- William Shakespeare

"Our doubts are traitors,
and make us lose the good we oft might win,
by fearing to attempt."
- William Shakespeare

"Pain has an element of blank;
It cannot recollect
When it began, or if there were
A day when it was not.
It has no future but itself,
Its infinite realms contain
Its past, enlightened to perceive
New periods of pain."
- Emily Dickinson

"Patience is the foundation of eternal peace. Make anger your enemy. Harm comes to those who know only victory and do not know defeat. Find fault with yourself and not with others. It is in falling short of your own goals that you will surpass those who exceed theirs."
- Tokugawa Ieyasu

"She smiled in defeat,
With unconquerable eyes."
- Atticus

"Somethin' filled up
My heart with nothin',
Someone told me not to cry.
Now that I'm older,
My heart's colder,
And I can see that it's a lie."
- Arcade Fire

"Sorrow is my own yard where the new grass flames as it has flamed often before but not with the cold fire that closes round me this year."
- William Carlos Williams

"The mountain seems no more a soulless thing,
But rather as a shape of ancient fear,
In darkness and the winds of Chaos born
Amid the lordless heavens' thundering
A Presence crouched, enormous and austere,
Before whose feet the mighty waters mourn."
- George Sterling

“The pain I feel now is the happiness I had before. That's the deal.”
- C.S. Lewis

"There are no regrets in life, just lessons."
- Jennifer Aniston

"The soul would have no rainbow
Had the eyes no tears."
- John Vance Cheney

"This is the Hour of Lead –
Remembered, if outlived,
As Freezing persons, recollect the Snow –
First – Chill – then Stupor – then the letting go –"
- Emily Dickinson

"This thing we call "failure" is not the falling down, but the staying down.”
- Mary Pickford

“To live is to suffer, to survive is to find some meaning in the suffering.”
- Friedrich Nietzsche

"Whenever I climb I am followed by a dog called Ego."
- Friedrich Nietzsche

"When to the sessions of sweet silent thought
I summon up remembrance of things past,
I sigh the lack of many a thing I sought,
And with old woes new wail my dear time’s waste"
- William Shakespeare

"You cannot now believe that you will ever feel better. But this is not true. You are sure to be happy again. Knowing this, truly believing it will make you less miserable now."
- Abraham Lincoln

"Your failure here is a metaphor. To learn for what, please resume climbing."
- Rob Dubbin`;

para = para.split(/\n\n/)
for (let i = 0; i < para.length; i++) {
    para[i] = para[i].match(/(-\s)?\w+([.,']\S\w+)?/g)
    para[i] = para[i].join(" ");
}

function shufflePara() {
    let shuffleTimes = 300

    while (shuffleTimes--) {
        const num1 = Math.floor(Math.random() * para.length)
        const num2 = Math.floor(Math.random() * para.length)
        let temp = para[num1]
        para[num1] = para[num2]
        para[num2] = temp
    }

}

shufflePara()
para = para.join(" ");

// para = (/(-\s[\w+\s]+$)/).exec(para)

//let para = `Hi my name is Gourav Chouhan and you are typing in the web-application I've created!, It's certainly not among the coolest typing master of all times but yeah that's somewhat cool. I'm trying to make it work properly but there are couple of several problems I am facing, one the that I don't have any content to give a player to type, so what I am doing is writing anything that's coming in my mind. That's exactly what I am doing right now. Other problem is that I don't know how to make the this available of the web, nither I know how to do backend programming of this think. Well, never mind, one day I'll learn all this shit, not a problem. I don't know why are you still using this faltu sa typing master till now, there are some many gorgeous one the web go and check. In the end I'll finish by saying a poem in hindi. "Sunkar kya tum bhala karoge meri bholi aatam katha, abhi samay bhe nahi hai, thaki soyi hai meri moan vaithya." Thank You for typing so long, bye bye`;
