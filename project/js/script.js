const goTop = document.getElementById('goTop');
const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');
const Q5 = document.getElementById('Q5');
const Q6 = document.getElementById('Q6');
const questionAndAnswer = document.getElementById('questionAndAnswer');
const toggles = document.getElementsByClassName('toggle');
const contentDiv = document.getElementsByClassName('textContent');
const icons = document.getElementsByClassName('icon');
const sec2nd = document.getElementById('sec2nd');
const sec4th = document.getElementById('sec4th');
const sec5th = document.getElementById('sec5th');
const sec8th = document.getElementById('sec8th');
const sec10th = document.getElementById('sec10th');
const sec11th = document.getElementById('sec11th');
const footer = document.getElementById('footer');
const aboutBtn = document.getElementById('aboutBtn');
const symptomBtn = document.getElementById('symptomBtn');
const preventionBtn = document.getElementById('preventionBtn');
const treatmentBtn = document.getElementById('treatmentBtn');
const faqBtn = document.getElementById('faqBtn');
const newsBtn = document.getElementById('newsBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 250) {
        goTop.classList.add('active');
    }
    else {
        goTop.classList.remove('active');
    }
});

// console.log(sec2nd.offsetTop + ' px ' + sec4th.offsetTop + ' px' );
window.addEventListener('scroll', () => {
    console.log('pageYOffset: ' + window.scrollY + 'px');
    if (window.scrollY >= sec2nd.offsetTop && window.scrollY <= sec4th.offsetTop) {
        aboutBtn.classList.add('afterClick');
    }
    else{
        aboutBtn.classList.remove('afterClick');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= sec4th.offsetTop && window.scrollY <= sec5th.offsetTop) {
        symptomBtn.classList.add('afterClick');
    }
    else {
        symptomBtn.classList.remove('afterClick');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= sec5th.offsetTop && window.scrollY <= sec8th.offsetTop) {
        preventionBtn.classList.add('afterClick');
    }
    else {
        preventionBtn.classList.remove('afterClick');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= sec8th.offsetTop && window.scrollY <= sec10th.offsetTop) {
        treatmentBtn.classList.add('afterClick');
    }
    else {
        treatmentBtn.classList.remove('afterClick');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= sec10th.offsetTop && window.scrollY <= sec11th.offsetTop) {
        faqBtn.classList.add('afterClick');
    }
    else {
        faqBtn.classList.remove('afterClick');
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= sec11th.offsetTop && window.scrollY <= footer.offsetTop) {
        newsBtn.classList.add('afterClick');
    }
    else {
        newsBtn.classList.remove('afterClick');
    }
});



$("document").ready(function () {
    $("#goTop").click(function () {
        $("html").animate({ scrollTop: 0 }, 80)
    })
});


function Collapse() {
    for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", () => {
            if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
                contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                toggles[i].style.color = "blue";
                icons[i].classList.remove('fa-plus');
                icons[i].classList.add("fa-minus");
            }
            else {
                contentDiv[i].style.height = "0px";
                toggles[i].style.color = "black";
                icons[i].classList.remove("fa-minus");
                icons[i].classList.add('fa-plus');
            }
            for (let j = 0; j < contentDiv.length; j++) {
                if (j !== i) {
                    contentDiv[j].style.height = "0px";
                    toggles[j].style.color = "black";
                    icons[j].classList.remove("fa-minus");
                    icons[j].classList.add('fa-plus');
                }
            }
        });
    }
}

function Q1Function() {
    Q1.classList.add("afterClick");
    Q2.classList.remove("afterClick");
    Q3.classList.remove("afterClick");
    Q4.classList.remove("afterClick");
    Q5.classList.remove("afterClick");
    Q6.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What is a novel coronavirus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, 'CO' stands for 'corona, VI' for virus,' and 'D' for disease. Formerly, this disease was referred to as "2019 novel coronavirus" or 2019-nCoV.
                                </p>
                                <p>A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the <a href="#" class="text-decoration-none">coronaviruses that commonly circulate among humans</a> and cause mild illness, like the common cold</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Why is the disease being called coronavirus disease 2019, COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, 'CO' stands for 'corona, "VI' for 'virus,' and 'D' for disease. Formerly, this disease was referred to as "2019 novel coronavirus" or 2019-nCov.</p>
                                <p>There are <span class="text-primary">many types</span> of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses COVID-19 is a new disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name of this disease was selected following the World Health Organization (WHO) best practiceexternal icon for naming of new human infectious diseases</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">How can people help stop stigma related to COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>People can fight stigma and help, not hurt, others by providing social support Counter stigma by learning and sharing facts Communicating the facts that viruses do not target specific racial or ethnic groups and how COVID-19 actually spreads can help stop stigma.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Why might someone blame or avoid individuals and groups?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>People in the US. may be worried or anxious about friends and relatives who are living in or visiting areas where COVID-19 is spreading. Some people are worried about the disease. Fear and anxiety can lead to social stigma, for example, towards Chinese or other Asian Americans or people who were in quarantine.</p>
                                <p>Stigma is discrimination against an identifiable group of people, a place, or a nation. Stigma is associated with a lack of knowledge about how COVID-19 spreads, a need to blame someone, fears about disease and death, and gossip that spreads rumors and myths.</p>
                                <p>Stigma hurts everyone by creating more fear or anger towards ordinary people instead of the disease that is causing the problem.</p>
                            </div>
                        </div>
                    </div>`;
    Collapse();
}
function Q2Function() {
    Q2.classList.add("afterClick");
    Q1.classList.remove("afterClick");
    Q3.classList.remove("afterClick");
    Q4.classList.remove("afterClick");
    Q5.classList.remove("afterClick");
    Q6.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What is the source of the virus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people. This is suspected to have occurred for the virus that causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated from animals and then spread to people. More information about the source and spread of COVID-19 is available on the 
                                <span class="text-primary"> Situation Summary: Source and Spread of the Virus. </span></p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">How does the virus spread?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person. It's important to note that person-to-person spread can happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so.</p>
                                <p>The virus that causes COVID-19 seems to be spreading easily and sustainably in the community ("community spread") in <span class="text-primary">some affected geographic areas.</span> Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.</p>
                                <p>Learn what is known about the <span class="text-primary">spread of newly emerged coronaviruses.</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Can someone who has had COVID-19 spread the illness to others?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>The virus that causes COVID-19 is spreading from person-to-person. Someone who is actively sick with COVID-19 can spread the illness to others. That is why CDC recommends that these patients be isolated either in the hospital or at home (depending on how sick they are) until they are better and no longer pose a risk of infecting others.</p>
                                <p>How long someone is actively sick can vary so the decision on when to release someone from isolation is made on a case-by-case basis in consultation with doctors, infection prevention and control experts, and public health officials and involves considering specifics of each situation including disease severity, illness signs and symptoms, and results of laboratory testing for that patient.</p>
                                <p>Current <span class="text-primary">CDC guidance for when it is OK to release someone from isolation</span> is made on a case by case basis and includes meeting all of the following requirements.</p>
                                <p>The patient is free from fever without the use of fever-reducing medications.</p>
                                <p>The patient is no longer showing symptoms, including cough</p>
                                <p>The patient has tested negative on at least two consecutive respiratory specimens collected at least 24 hours apart</p>
                                <p>Someone who has been released from isolation is not considered to pose a risk of infection to others.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Will warm weather stop the outbreak of COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>It is not yet known whether weather and temperature impact the spread of COVID 19. Some other viruses, like the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months. At this time, it is not known whether the spread of COVID-19 will decrease when weather becomes warmer. There is much more to learn about the transmissibility, severity, and other features associated with COVID 19 and investigations are ongoing</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Can the virus that causes COVID-19 be spread through food including refrigerated or frozen food?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Coronaviruses are generally thought to be spread from person-to-person through respiratory droplets. Currently there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for 20 seconds for general food safety. Throughout the day wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom.</p>
                                <p>It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.</p>
                                <p>In general, because of poor survivability of these coronaviruses on surfaces, there is likely very low risk of spread from food products or packaging that are shipped over a period of days or weeks at ambient, refrigerated, or frozen temperatures.</p>
                                <p>Learn what is known about the <span class="text-primary">spread of COVID-19</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What is community spread?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.</p>
                            </div>
                        </div>
                    </div>
                    `;
    Collapse();
}
function Q3Function() {
    Q3.classList.add("afterClick");
    Q1.classList.remove("afterClick");
    Q2.classList.remove("afterClick");
    Q4.classList.remove("afterClick");
    Q5.classList.remove("afterClick");
    Q6.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What can I do to protect myself and prevent the spread of disease?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <h5>Protection measures for everyone</h5>
                                <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.</p>
                                <p>You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions</p>
                                <ul>
                                <li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water</li>
                                <p class="mt-2"><span class="fw-bolder">Why?</span> Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands</p>
                                <li>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing</li>
                                <p class="mt-2"><span class="fw-bolder">Why?</span> When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.</p>
                                <li>Avoid touching eyes, nose and mouth.</li>
                                <p><span class="fw-bolder">Why?</span> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick</p>
                                <li>Make sure you, and the people around you, follow good respiratory hygiene This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze Then dispose of the used tissue immediately</li>
                                <p><span class="fw-bolder">Why?</span> Droplets spread virus By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.</p>
                                <li>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing seek medical attention and call in advance. Follow the directions of your local health authority</li>
                                <p><span class="fw-bolder">Why?</span>National and local authorities will have the most up to date information on the situation in your area Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections</p>
                                <li>Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places - especially if you are an older person or have diabetes, heart or lung disease</li>
                                <p><span class="fw-bolder">Why?</span>You have a higher chance of catching COVID-19 in one of these area</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What should I do if I had close contact with someone who has COVID 19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique natus explicabo, provident facere vero enim hic tempore placeat libero quibusdam! Aspernatur, quam earum est odit dolore exercitationem harum animi at, esse debitis ullam consequatur, quisquam beatae accusantium minima. Nulla aspernatur ea, necessitatibus perspiciatis fuga expedita beatae ullam distinctio! Reprehenderit pariatur aliquam, optio, velit quisquam dolores natus repellat iure, praesentium at quidem in corrupti nesciunt sint provident ut delectus. Commodi quaerat distinctio totam harum consequuntur. Nemo officia reiciendis laboriosam commodi, quidem consequuntur nam autem, iusto sunt fuga provident nostrum perspiciatis eos reprehenderit non, distinctio magni amet esse sapiente ipsam voluptatibus in.
</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Who is at higher risk for serious illness from COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique natus explicabo, provident facere vero enim hic tempore placeat libero quibusdam! Aspernatur, quam earum est odit dolore exercitationem harum animi at, esse debitis ullam consequatur, quisquam beatae accusantium minima. Nulla aspernatur ea, necessitatibus perspiciatis fuga expedita beatae ullam distinctio! Reprehenderit pariatur aliquam, optio, velit quisquam dolores natus repellat iure, praesentium at quidem in corrupti nesciunt sint provident ut delectus. Commodi quaerat distinctio totam harum consequuntur. Nemo officia reiciendis laboriosam commodi, quidem consequuntur nam autem, iusto sunt fuga provident nostrum perspiciatis eos reprehenderit non, distinctio magni amet esse sapiente ipsam voluptatibus in.
</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What should people at higher risk of serious illness with COVID-19 do?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et! Lorem ipsum
                                    dolor sit amet
                                    consectetur adipisicing elit. Quisquam explicabo quia repellat autem nostrum nulla
                                    tempora voluptatum
                                    perspiciatis officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique natus explicabo, provident facere vero enim hic tempore placeat libero quibusdam! Aspernatur, quam earum est odit dolore exercitationem harum animi at, esse debitis ullam consequatur, quisquam beatae accusantium minima. Nulla aspernatur ea, necessitatibus perspiciatis fuga expedita beatae ullam distinctio! Reprehenderit pariatur aliquam, optio, velit quisquam dolores natus repellat iure, praesentium at quidem in corrupti nesciunt sint provident ut delectus. Commodi quaerat distinctio totam harum consequuntur. Nemo officia reiciendis laboriosam commodi, quidem consequuntur nam autem, iusto sunt fuga provident nostrum perspiciatis eos reprehenderit non, distinctio magni amet esse sapiente ipsam voluptatibus in.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">should I wear a mask to protect myself?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et! Lorem ipsum
                                    dolor sit amet
                                    consectetur adipisicing elit. Quisquam explicabo quia repellat autem nostrum nulla
                                    tempora voluptatum
                                    perspiciatis officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique natus explicabo, provident facere vero enim hic tempore placeat libero quibusdam! Aspernatur, quam earum est odit dolore exercitationem harum animi at, esse debitis ullam consequatur, quisquam beatae accusantium minima. Nulla aspernatur ea, necessitatibus perspiciatis fuga expedita beatae ullam distinctio! Reprehenderit pariatur aliquam, optio, velit quisquam dolores natus repellat iure, praesentium at quidem in corrupti nesciunt sint provident ut delectus. Commodi quaerat distinctio totam harum consequuntur. Nemo officia reiciendis laboriosam commodi, quidem consequuntur nam autem, iusto sunt fuga provident nostrum perspiciatis eos reprehenderit non, distinctio magni amet esse sapiente ipsam voluptatibus in.
                                    </p>
                            </div>
                        </div>
                    </div>`;
    Collapse();
}
function Q4Function() {
    Q4.classList.add("afterClick");
    Q1.classList.remove("afterClick");
    Q2.classList.remove("afterClick");
    Q3.classList.remove("afterClick");
    Q5.classList.remove("afterClick");
    Q6.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What are the symptoms of COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don't develop any symptoms and don't feel unwell Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.</p>
                                <p class="text-primary">Read about COVID-19 Symptoms from CDC.gov.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Should I be tested for COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Not everyone needs to be tested for COVID-19. For information about testing, see Testing for COVID-19.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Where can I get tested for COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>The process and locations for testing vary from place to place. Contact your state, local, tribal, or territorial department for more information, or reach out to a medical provider. State and local public health departments have received tests from CDC while medical providers are getting tests developed by commercial manufacturers. While supplies of these tests are increasing, it may still be difficult to find someplace to get tested.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Can a person test negative and later test positive for COVID-19?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Using the CDC-developed diagnostic test, a negative result means that the virus that causes COVID-19 was not found in the person's sample. In the early stages of infection, it is possible the virus will not be detected.</p>
                                <p>For COVID-19, a negative test result for a sample collected while a person has symptoms likely means that the COVID-19 virus is not causing their current illness.</p>
                            </div>
                        </div>
                    </div>`;
    Collapse();
}
function Q5Function() {
    Q5.classList.add("afterClick");
    Q1.classList.remove("afterClick");
    Q2.classList.remove("afterClick");
    Q3.classList.remove("afterClick");
    Q4.classList.remove("afterClick");
    Q6.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What should I do if there is an outbreak in my community?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Outbreaks can be stressful for adults and children. Talk with your children about the outbreak, try to stay calm, and reassure them that they are safe. If appropriate, explain to them that most illness from COVID-19 seems to be mild.</p>
                                <p class="text-primary">Children respond differently to stressful situations than adults</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">What steps should parents take to protect children during a community outbreak?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>This is a new virus and we are still learning about it, but so far, there does not seem to be a lot of illness in children. Most illness, including serious illness, is happening in adults of working age and older adults. If there cases of COVID-19 that impact your child's school, the school may dismiss students. Keep track of school dismissals in your community. Read or watch local media sources that report school dismissals. If schools are dismissed temporarily, use alternative childcare arrangements, if needed.</p>
                                <p>If your child/children become sick with COVID-19, notify their childcare facility or school. Talk with teachers about classroom assignments and activities they can do from home to keep up with their schoolwork</p>
                                <p>Discourage children and teens from gathering in other public places while school is dismissed to help slow the spread of COVID-19 in the community</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Will schools be dismissed if there is an outbreak in my community?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Depending on the situation, public health officials may recommend community actions to reduce exposures to COVID-19, such as school dismissals. Read or watch local media sources that report school dismissals or and watch for communication from your child's school. If schools are dismissed temporarily, discourage students and staff from gathering or socializing anywhere, like at a friend's house, a favorite restaurant, or the local shopping mall.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Can the virus that causes COVID-19 be spread through food, including refrigerated or frozen food?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Coronaviruses are generally thought to be spread from person-to-person through respiratory droplets. Currently there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for 20 seconds for general food safety. Throughout the day wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom.</p>
                                <p>It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads</p>
                                <p>In general, because of poor survivability of these coronaviruses on surfaces, there is likely very low risk of spread from food products or packaging that are shipped over a period of days or weeks at ambient, refrigerated, or frozen temperatures.</p>
                                <p>Learn what is known about the spread of COVID-19.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Should I go to work if there is an outbreak in my community?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Follow the advice of your local health officials. Stay home if you can. Talk to your employer to discuss working from home, taking leave if you or someone in your household gets sick with COVID-19 symptoms, or if your child's school is dismissed temporarily. Employers should be aware that more employees may need to stay at home to care for sick children or other sick family members than is usual in case of a community outbreak</p>
                            </div>
                        </div>
                    </div>`;
    Collapse();
}
function Q6Function() {
    Q6.classList.add("afterClick");
    Q1.classList.remove("afterClick");
    Q2.classList.remove("afterClick");
    Q3.classList.remove("afterClick");
    Q4.classList.remove("afterClick");
    Q5.classList.remove("afterClick");
    questionAndAnswer.innerHTML = `<div class="card">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">COVID-19 virus can be transmitted in areas with hot and humid climates?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19 The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Cold weather and snow CANNOT kill the new coronavirus</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Taking a hot bath does not prevent the new coronavirus disease</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">The new coronavirus CANNOT be transmitted through mosquito bites.</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Are hand dryers effective in killing the new coronavirus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Can an ultraviolet disinfection lamp kill the new coronavirus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">How effective are thermal scanners in detecting people infected with the new coronavirus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>Thermal scanners are effective in detecting people who have developed a fever (ie. have a higher than normal body temperature) because of infection with the new coronavirus.
                                    However, they cannot detect people who are infected but are not yet sick with fever This is because it takes between 2 and 10 days before people who are infected become sick and develop a fever</p>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="cardHead card-header border-bottom p-3">
                            <div class="d-flex justify-content-between align-content-center toggle">
                                <p class="mb-0">Do vaccines against pneumonia protect you against the new coronavirus?</p>
                                <i class="fas fa-plus mb-0 icon"></i>
                            </div>
                        </div>
                        <div class="textContent">
                            <div class="card-body">
                                <p>No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus.</p>
                                <p>The virus is so new and different that it needs its own vaccine. Researchers are trying to develop a vaccine against 2019-nCoV, and WHO is supporting their efforts.</p>
                                <p>Although these vaccines are not effective against 2019-nCoV, vaccination against respiratory illnesses is highly recommended to protect your health.</p>
                            </div>
                        </div>
                    </div>`;
    Collapse();
}

Collapse();