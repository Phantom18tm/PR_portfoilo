import { ShootingStars } from "../components/shootingstar.tsx";
import { FlipWords } from "../components/change.tsx";
import { TiltedCard } from '../components/tech.tsx';
import React from "react";

"use client";
export function TechStack() {
  const stack = ["Build_on", "Code_on", "Learn", "Create"];
  


  return (
        <div id="techstack" className="min-h-screen bg-black flex flex-col items-center justify-center relative w-full px-4 py-10">
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6 font-Michroma text-center md:text-left text-neutral-600 dark:text-neutral-400">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-20 md:pt-32">
                  Tech I Use to<br />
                  <FlipWords words={stack} />
                </h2>
              </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-10 py-12 w-full max-w-6xl mx-auto">
        
       <TiltedCard
                imageSrc="https://cdn-icons-png.freepik.com/256/9630/9630362.png?uid=R187751152&ga=GA1.1.1956167738.1750916230&semt=ais_hybrid"
                altText="React"
                captionText="Reactjs"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    ReactJS
                  </p>}/>
      <TiltedCard
                imageSrc="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"
                altText="TailWind CSS"
                captionText="Tailwind CSS"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    Tailwind CSS
                  </p>}/>
       <TiltedCard
                imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD///93d3deXl7Gxsbw8PDV1dX8/Pz19fXj4+Pp6ens7Oz5+fnLy8vKyspmZmacnJympqaTk5Pd3d2zs7OBgYGxsbG6uro9PT0tLS0ODg41NTXR0dFQUFBCQkKGhoYeHh5LS0s5OTltbW0nJydXV1eWlpYXFxcMDAyNjY1gYGCDg4N6enpxcXG66ewUAAAHVUlEQVR4nO2d60LqSgyFuxW5iMpFFPEGqKhs9f1f71AKBzbJggFmZbrPyfe7mgbKzGpW0maZ4ziO4ziO4ziO4ziO4ziO4ziO4ziO87/k+6QcfNMyrP0qBzVaho3UqS1o0DJ8TJ3agkdahpXUqS2o0DLsp05tQZ+WYTt1agvatAxvUqe24IaWYSt1agtatAyfUqe24ImW4XPq1BY80zIcXKTObc7FgJbhRzN1cnOaH7QMSyLbeKIty65TJzfnmphhOYQpT5aWRbbxRFtZZBtPtGXZMHVyc4bEDE9SJzfnhJhhOYQpT5Zm2Th1cnPGxAxLIduIom1GPXV6M+rMBLOz1OnNOKNmeJ46vRnn1AzLINuYoi3LeqnT+8UVbVnWSZ3ejA41w3c9aG9yGp8JuGDeqRl+WX6s4IL5ogRbcqoH5fw0wL3ab0qwJS960ColWFUP9kIJ9i960CYlFpAXlFgr9KAcIQUkIiXWCt0GvmCEutdlPs8ALtDriTWG3H/RP01mLTEHyDaGkzDRQ3FFG1zBXwmhfvRQXNGWZbd6WEb/B3Arbwmh1gH1xCkhVFcPxawl5nzbhQWijWcAFxjKNtD5cUoItc6dHpYh24ANdEcItc6bHpZhBwEr740Qap0PPSxjGwY1IaI9WqDbwGci7vSqchxXuqThiPx19F/HxcPmcax6B9MeLQCyTbRHsGwqtmjLsis98GTzOKC5juaSniEoDwk/6Dcpwx49Q1BtE+UhcGdwNGzRBvWwCHxHaplmizZokgrZ9kayqZj2aAG4+mTbLql/Sixp0QHde3IRJ9lUTAO4YKBffVK2cTrE6lQDeM4nkG3iwEtKhs1Peobo6hPHcYw4rj1aAK6+0eZxnP4pdi0xB1x94sZ0SsmQL9pgtU0UFziN/XzRBq8+oTU40psv2uBtkQg9PjsK0JvE7NpbAuqJsQu14A6aN3q4AtwWxa4nht6lEQCyLfYiB6qlvFGLFR82ppdeD6qNIodRsTEudflLsWIFYJWLHEUPYpMhkG33caPoQSxEG6y2xfUTQFvLVdQgCLCOx23kAR6XhWgz8vWAquV27S0xsYETGcAFYOgibnDwMVqINlhti/sTAT92fqUtZ6AHjyvbgAEkLC4OevC4W1VoNYiDHjyudZmmL3F79KhjEPd6DO4wyQog+6sHcy3W4Qdd/PIN4IL4tV6RIXi2gUWlLSf+rKzY5kIdLhLxq9miFAlUhY0shTbwEYjaBCgnc0ctVsSflQ3tVWHOx64T3aI/G22GSNS1tyT6I06kHAKjFhaVtpwHPbzYEIOfMSG3OfCnRrI0G+l1MGnthVr5sndTl6UX7L7EveOHGt1im0OfoYEBXBB6DYFfk0CKNv04K9EWvg6EztSKhiqwlnEGyDRCu/dCxc/P5h+C/chKlkIbWIyVhIofUYgEmoI9arECFMKEexlodNfE5Q0+GivRBk1SUcx8DcuwPtr8Q3B587v2dpy5WPRB4XoTWR0wnK7SAWcuuveewzowZYUH3GNzJ4ADzlwsdWDj3kRuAmDK0UqWwjOXG3LYg0Lknbv+/+tmoi282haWobRb9OO4DzX5EyCpxXHTAN1Wq8hSvX4kf5hkBZDU2qGtzjleby6q79pvC9ijNgZwAbgFByNJD98V5W6k1ui0wL0CaNmxMYALgGzbstaNp5frX+V5/2fL3SxoLLMTbdDd27FfPXWKq/tquqOVGfx7G3u0ABT7dj915PO7HWABgkobY9gYQZ4GBqLNxgAuAPdvsfoIwB5jVUvMAVWGWEV3IBSsKm1z9FOI9bx7sIFG+u9h6KcQq1JUhgx1aRxJOILfgE3X3hIwDRznn4N1zK6WmKPLtlqc/kRQ3rEUbbCQUn/sHtuieNppgAZWK3u0YMsser3/c+hXOZiCSuwcm669JaCeuKTaedo3y0Grv2Ni0a6WmLN7IObschh+wU7a17ufbmtlABeEvemieRswHnE/rIQVrGy69paA7j2FanvLV/lx2gsfpjUVbdl98HnNaFZOtCcBPnUf93rwcuRW+V3sOW2flyzW/3z03d971ts2wUMmtWuX3aLgubzX3w/LSltOqL27eZr94aFdcbaijTWpvQ07e7TA/hVsvJet6YB6IhHLWmIOZ1J7G13jDFmPEMLYirZgezcidvZowdg8Q97L1nSAPUSE/TTBTUbW74GwNIALrN8DYfFQkz+xfgWbpT1aYP0KNmtZai/bbGuJOTe2L9Wpc9+IoDPuVm2yrFe7/Cd8Ad5aPfaK0+i1RqnSW/Aw5d0r7nT8zdjaNHMYtUbH0vMN4G54GU/mNCs3trXDQD4mnRi7ZLX9ZDZ1cAD3X5Vj3j5X74uu9jIS5EIo2elNbiXl4URrZdtCo/c6Sn3Se/PcDi2qXk1Lua4E8dPftcCed2w9JQJbxF2z8lWWHf1I3lp9Ke6qIT18fxOD7pq4m20K9BcAJKF1ez7vfLYuKpny/Prf/PIcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcC/4B+J5x+054UdsAAAAASUVORK5CYII="
                altText="HTML5"
                captionText="HTML5"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    HTML5
                  </p>}/>
     <TiltedCard
                imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///9XV1fp6el2dnZycnKNjY3m5ub6+vru7u719fXg4ODv7+9JSUkeHh6urq7IyMhlZWWVlZXPz8+AgIC4uLjAwMBSUlI2NjbGxsZCQkKdnZ0bGxumpqZWVlZ7e3spKSkODg6Hh4dpaWnX19cxMTETExM6OjqZmZlDQ0MyMjIqKiq+MMCBAAAHlklEQVR4nO2dC1PqPBCGWwEp5X5VVBQUwaP///99DU13t+Ut+HnrltlnxpkzTY+TF7LJ7iYbg8AwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDEMzs8as6i78Ko/dMAy7j1V349e4XYQpi9uqu/IrbO6jMCO631TdnZ/nqRFKGk9Vd+iHudmGRbY3VXfqJ5mzsCH/c151t36MiRC1CTYsN5pU3bUfodUuDsybKT1ptyru3ffps5pOk542O/R02q+wd99nMKQVIr9AyKVjOKisf9/mOiYZi/dC2+uC2uLrSnr3fa7YALtoZeiz/vbVn/fu+9wuqf+9Z/TCVVeujsv9X3fwmwxWvCQMd+CF/SIssKqVOT7zXLm8Qy+saKLhb7JTn7hKjL/2GL3wRB9A5ykY89vdepjjgMdfBCfJPvuoq8MDOeXWYKjes2UNUfuAnbYlyRHO6v3fdfVLCGdl+w+9MGEDlAP4Trg+mh056XA20Qvso3aKA7jJ5jjVGletefzFExTDCx8VLA2bCZvjfP3rvf0Cb2c6uGNjm8IVJPcRvf1qX7/CmJMUWxgt8ITZgCvIATHNnnirCsRE0YMGOCYDxCsIIeMq/E1XwYDHXwQn+/2IB/DDud+mMK567lGXFsh/fmAX7VOzpHBZsc/+x0inC5oO+6iNz6504+2Z3/mHDHj8RdBxvuEPAE6P/dELejzjiXlU7VC9YptBzWsecNDjfHDrwxSGhmzb1brjmcIR6uWafdQt3I259gY6LKY4HPtlpEhhDK1lnFkgjvxeaADHMMU/7ilSWJIU3Bz8nGiFgvw+W/BwfbJdicKkn2il+5jjDMxGuHAoBtlwGlKDwk6adMJJwQ/0kKfKBpxKn9P2ZUeJwkbmlOHuHv8nMkDswvk0ZHsctNUoJMd6dN6XFC7LHK0gPg0Zu10bTQopOwGnDWbHLhzcQNx5tzQNwFQppAi/d2rLbEZBVgPGIL4981+VKQyCViMzIIzYCYYunG/nTI06hUmg71cAdNhiwwa4hC7c4ki8QoXUzePVkXeC8Q6+/3By/qtGhcmjdKgVVscWGSB24Xz7Ni9Hp0KaLkRox2nGEhduisVrVZgsCakcvzqKLAfcp/HtQLxahcmy7f1mFzVylg1PspmzAPxXxQrJNYsmlGWLYdLFpyHxLnBDs8Lku+EMlZM6RGnwuxGaljwv6YejV6E8iYHjx0HqwkUwa0gBomKFopcwiPdpyBESv+NPR7XCZKSlZtY4tkFvqCUBohjhyhXSjmHhZPDAH9WAbvpj7piGeoXBzsdVIxHu+yzcHC3/r8sw1KvwGrssqSMXrbyz6k8qQP90wynI6a3C9fA6xGfx/QnhjjNH77jiU8J8lNjtIqtUWJL9zWL37jgds/ik9yMFkNFhF1mpwiQCgolFeQpq8Qre2PEe8CK1WbUKSw7/0i4NrrgQxzQyA9WrMLE4vKXklrkezvGTAYp2zQpL/LRW0oB2Ee9EACke61YIE4tO4XGSTQaQuRy/doUgZIAKOYAs7viqV3gc9gGFVyeOadRAYeKr5daFI4XCRQMFJrVQGIYrsToWFD4IFw1NTDVRGG65vaCQXJiSYxp1Udjm9oJCb4LxW0mx3qUoLC+4vAyFsBZDtNddIXbhuL3uCrswxcjURWHMfcwr3CAD3AtFdVEoDg1jv1TyJiOv+iikgPGcQpfmrqfCLGA8rfD2EEPVVWF6qvmUwge/J1dfhW7r+6VcIaW5dSu8isvUpUN1XqaQjwXLc44KFQbrYYk4BigUebhcYkCjwiD4Ny1RVq6Qj+cXajV0Kkym/E6ZOKiwSftMRwk6rQqTL+WUOeYVcpkMqNXQqzB4n5fpyysUpU4ohtKisAdb+AxbFJcp5HK1LTym0VOisKS0hQ4CdwdzqJCLoWIYQ81SA9WgsCyM9U5KO1eUlil85TkX1mrQLke1CrlmZrEGzenBoUN8yDPmQeGOC/ZhRQnXolRcMyPqniKYTnLBgo+As1XPKZyR3jbawtnQPlTldU8Ocihx7e8kzuZaf8K7JWahGG7DUbmwitq1QG6swLTuO2/3Hr7wa5535qhWgcuFtdQfBnJzDE4aTCsU4HJa/rj01JA6qA44OjmwhMIePKkwywxQWR2wg2q5T00OpDC3EUrQtIXts2rYA4PFsgdap96gWweV1uMH4rBzXHZrYKqwC1cIctfV3qngaGWBU8mtgU4hPkzazAy5czrbWD20I7hFU2FZJmpPK6T2u00CeT8NKNwqOanAFqxnBTwFVd/935MKNbljyDHLzLE4pwCFtELU6J6ogLO7xWvKjhTu6aTC6ux9Esqg+9pya3tRIVUj1u6+NgcdlBHF6HmFzcwAa3nnnoOmEPKxpUKK+2t7b2IgKy7m6cEhVvhBK4SiGOkrULCX+tKkkLJsNb+/1EEBu6vr8gopy3YBd9A6qHp0+uF2117WlL5SGSN9CbK5qf9JbbPqbv0kF3+fd8JTO6evfWl3sgdccXHwc+5RaU39oSzF8jL/NoIj/fsWdXXRPsel/40SwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzDqz3/G1VyCCTJzqAAAAABJRU5ErkJggg=="
                altText="CSS"
                captionText="CSS"
                containerHeight="80px"          
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    CSS
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD///9ERERiYmLt7e0TExPy8vIHBwfn5+d2dnbT09M/Pz/Y2Ni1tbWxsbGVlZUZGRnh4eH4+PgzMzNQUFAdHR29vb06OjowMDArKyskJCTi4uKfn5/Kyspubm5eXl6oqKhWVlbExMSHh4dfX1+NjY18fHxKSkpxcXFRZqhlAAAEzElEQVR4nO2caWOiMBRFQQHXumDdrct00f//C6ftALmPreoYEug93yaGNGfiS14C6DiEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCLGJSVszz6YNW65mXmhIQxrSkIYNMvQeTBC127fFMHh0wz3rDDsPbviDhlWhzbD539LfYzh8cLs3o83wQsOq0Ga4t9Zw3itj/1ltX1pjHrVjr+HALSP0nY5XWmMQtVNXQ893nO5Vhm0aVgUNaVhoeLDWcDPOZZsx7MoK/doYFtDPGKa6/lRgONXS7RvQZniiYVVoM3ymYVXQMOZmwzMNq0K74VZLt2/gYYaLqKFWquHmGPrzyRfzuJ3mGRY13FzDeI/SffQR163QMOZmwyUNq0K/of+4zt4FDWNuNpy56gqj0DDmfsPJ4zp7F9oMV7/HcF5eTzv3G3qjXNbRBev6GxYQ7w9pWBnaDYONdodytBluaFgVGcPldDv9pLuT9ZRhp+6G8c71SdaDMRy0clguigzXjlnuMMwnfZrYfMN59O+QhrrRb7jS0/GroWEMDTOGk99jONPT8auhYczdhq61hgtZDwz9CFkhnbX5oe2Grky9IfOeht/I1wx2bpHhUr9EKSVP7olR/OEkauHWx3AWJp0dwgFEqeF8mFyTTCz2GjrP6jnubiupV2bYUjtGL3k53T5DVbSGEWnHhSWGbRh1SLNtMxSpx5+ky+5rVFRs+Koq/4E24meiksA0RfIOaXiG0qPq9fFfSaFhtuo3H0mpNYZquL5QHYxe5C0yfFEVP+B68LbI0B1B+SFIiqdfwZVviCH7pi7e9KHVlmMWWBxctw8TxVJNkMFzgSFOuzBUJ3yrZmj6zNs5b6E7HvwSiQ8Dcck1vKj/nT7kcDD1ZNJbI/gv2CMMpidV/J417L/ne4ywudf0XzPDDvt0LPogbQiM1SUTDMHQ+I/TxOxFMMIXrhemXHINL+qCE14wNH0LHxhMoWOQqznnQMrkGAYwUCIER9m/YxAf0hg3hEFZT4VO1nAKydATfmBJCCrG2DvYG8qJKGP4or6JqyGUB9aEoEIEI2aYkJ9kDI+q2gG/0H3jq2AeM+x6F758sCykDN9zK8kJ2SpEMLZV+VsyvMIQE7UFCn5km7YFsQDCKjfwcgw9NefOMAQ9C0NQIYIRDmo2w4wh7HbbIgRNPwT1A0tMU3ElWKQMQV9Mw8eqe3wzHQzG4KQ+2AlDWE/qEoIKMSSwbvfAsJeUrnEG9kxvd6+kjcEI24ZTEBnC0IrANf67XlezxFRtqIJxuQ0/DT3Y7dYsBBU+xpanRmyzmDv+KHlCRsRs2MttylrE4MD00XHUw1MyCTrntGI1IhhzN0I1DUHFBlfGnGVc5D+7nAZqAAZjN5WKTcSyuTfTwf8HgzEUa3lLpD6mj0T/A5FwHlX5RewlLTqOuZ0VjlUym+CeGLcg9QTjrft9p6yD5xq4jawrIhg/p5QWntlPTT+H8BBEMI4vBTvIWiN28I0KQcUiz68JIagYZwW3ph/JezCH1PF+Y0JQsZLB+P7zFfUD7koEB9Od0UMSjMOGhaDi7V8w2nDnWhff99oaGYKKhT13rnVh5W0zQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYRcz19xY1I8dSezcgAAAABJRU5ErkJggg=="
                altText="Javascript"
                captionText="JavaScript"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    JavaScript
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/jpeg;base64,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"
                altText="Node.js"
                captionText="Node.js"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center ">
                    Node.js
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/jpeg;base64,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"
                altText="MongoDB"
                captionText="MongoDB"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    MongoDB
                  </p>}/>

     <TiltedCard
                imageSrc="https://cdn.dribbble.com/userupload/37757938/file/original-2dbe35a048d5367040f8f39c7526cd4f.png"
                altText="Figma"
                captionText="Figma"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    Figma
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAflBMVEUAAAD///+lpaXp6ekPDw/b29vs7OzDw8Px8fEyMjLX19fAwMDU1NT6+vrw8PDh4eGHh4etra1LS0tGRkZeXl5AQECUlJR2dnZUVFSZmZnJyckZGRlKSkq0tLR8fHxmZmYiIiJubm4dHR0TExOfn5+CgoIpKSlZWVmOjo45OTmqiSCBAAAENUlEQVR4nO3ae1faMACH4YZby6WWijKpgiJMt+//BUeTNGku6M4ZHNv5Pn/sYJr0hJ9JmsYlCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgiu6/ugM98px/dQ965Easv7oLvbEWQsSKi/F4XPwOyqey/NLxjuubXvie13DKSszPlItxULyQ5dfoxMVvenlz2c/IGr+UF/Ze6bMs/XXpXvQjrJXspohNgWF9IfMKb+rCycW70Y+wChWW+BFeepAXNk7ZWpa9X7wbvQjrh85KxLYPlbwyahfJkury/ehFWHkTlhiEFx+Fv/irBe5Ffr49prNxVbYWtdunp9uV/mjKjunCrXVyv56fCrc7W9KHsAbCej13+cn8vLKx7m5Mw1JfPeg17lBmzReP1EqSu8IUzpth24OwXltZRSdX7i7+hZmws3bLXMU5Umv/zn7xhVNLD7p5u7B52vYgrMrp90NYQS1pO+en+lEwFC4562RYw3dhvni0VuUVqidL98N6cLs9jFSxYylpjbNUN0jnY2GzkWEVE1MwN7VmttZRfcqqeTPspnXb7oc18X7Jy7DKvbyg1hu1gp0m060KQU0+Fck20WHJQLPh6Rmqa6nJt61L980zI3+WhSq4Rf2x82EthS9SyT7/7LNRziSzMS2bpiN9l/Igy1NntJZqwyYDzw+68KcZWp0PK8hKjo9orfq3X5kvJD/YF6Ss/nFvwrprNzRbiORF/iuXMbsBlvNzk3Q/rG0Yllo/XGudgN3P/5afimFDhnVswmr2a1M5H/27qanpNk2Tzoc1jWQlZpGK+m3QvinexVpum7CandNdMyLbXmNN65ONjoc1i/VbPIcV1TnDwl7+MCzz2iRr+Xu3noa1j2YVzpukvbVUA+8+1nBgNqWarBXsRmJNq6TrYWXxsLxDBunNXHxTBfLzKqjnhqVq+YugnMy7JNDpsDZnsor2uNSXmte7yh2DTWxeWHJAmkVrmcmnpNqrvfhNOx3WKMjISCPVczdHtd3M9LZgK2ZTe1Mb1t7MsUTt6RZvzWatWRo3Yqjfsboclvsy6wrnl948/vSbF+X6qHZf28ckCCvRr0LpZl1mJm21ExGT7Xqj7lJ1/XXn6YOszp4wtxfrwm9UDxU/rGD4ys1o6pfKl6wOhxV8V0dk/a0nnnMo4Z4d5PbUoX08/5bF7ls6hfqMprth7T7MKnrCnPpbpn3rLVy/JTWHfy2tYGbmT5APrd9Vqo8cuxuWPUuOi5wwH8KD1PdynIl8mNqzil/L5dIflstqmItsMXD+1rYazE5NJ9X60VSr/ev3uobBJ1m1Hu1W+Kfpb+Hl06yu8eebnlp8HpY5Zvnuoq/Bvpuv7mVH+GfJcRf/zwy9dP6l0DX6/Fb/v+Pgr5SRgy0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQG/8ARCUJRw1OlMAAAAAAElFTkSuQmCC"
                altText="Vercel"
                captionText="Vercel"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    Vercel
                  </p>}/>

     <TiltedCard
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheoSJMYJR7FdvOnLtsu2r6QumESqJjV0S9g&s"
              altText="GitHub"
              captionText="GitHub"
              containerHeight="80px"
              containerWidth="80px"
              imageHeight="80px"
              imageWidth="80px"
              rotateAmplitude={18}
              scaleOnHover={1.4}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                  GitHub
                </p>}/>
     <TiltedCard
              imageSrc="data:image/png;base64,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"
              altText="MySQL"
              captionText="MySQL"
              containerHeight="80px"
              containerWidth="80px"
              imageHeight="80px"
              imageWidth="80px"
              rotateAmplitude={18}
              scaleOnHover={1.4}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                  MySQL
                </p>}/>
 
 
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-6xl mx-auto pt-16 text-neutral-400 text-2xl sm:text-3xl md:text-4xl font-semibold font-Michroma text-center md:text-left">
        <h2>
          <span className="text-stone-100 font-semibold">Other</span> Stuff<br />I work with
        </h2>
      </div>

         

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-10 py-12 w-full max-w-6xl mx-auto">
       <TiltedCard
                imageSrc="data:image/png;base64,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"
                altText="Canva"
                captionText="Canva"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    Canva
                  </p>}/>
      <TiltedCard
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0XjpE8A5UcHI2znynp6Dz_IjL_jsNBrEWg&s"
                altText="VsCode"
                captionText="VsCode"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    VsCode
                  </p>}/>
       <TiltedCard
                imageSrc="data:image/png;base64,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"
                altText="ChatGPT"
                captionText="ChatGPT"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    ChatGPT
                  </p>}/>
     <TiltedCard
                imageSrc="data:image/png;base64,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"
                altText="Python"
                captionText="Python"
                containerHeight="80px"          
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    Python
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/png;base64,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"
                altText="CallofDuty"
                captionText="Call of Duty"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center">
                    COD
                  </p>}/>

     <TiltedCard
                imageSrc="data:image/png;base64,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"
                altText="Piano"
                captionText="Piano"
                containerHeight="80px"
                containerWidth="80px"
                imageHeight="80px"
                imageWidth="80px"
                rotateAmplitude={18}
                scaleOnHover={1.4}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-[8px] font-Michroma relative z-10 text-white text-center ">
                    Piano/keyboard
                  </p>}/>
      </div>
                 <div className="pt-5 md:pt-10 flex items-center justify-center w-full">
                    <hr className="w-1/4 border-neutral-500" />
                    <p className="mx-4 text-neutral-500">-</p>
                    <hr className="w-1/4 border-neutral-500" />
                  </div>

       
        
      <ShootingStars />
    </div>
  );
}