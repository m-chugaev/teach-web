'use client'
import React, { useState, useEffect } from 'react'

export default function Analytics() {
    useEffect(() => {
        ym(96943535, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true
        });
        
        // // Клик по кнопке 'Сгенерировать 5'
        // document.querySelector('.js-generate-random').addEventListener('click', function() {
        //     ym(96943535, 'reachGoal', 'generate_random_5');
        // });
        
        // // Клик по кнопке 'Сгенерировать ещё 1'
        // document.querySelector('.js-generate-random-one').addEventListener('click', function() {
        //     ym(96943535, 'reachGoal', 'generate_random_one');
        // });
      }, []);


    return <>
        <script dangerouslySetInnerHTML={{
            __html: `
            (function (m, e, t, r, i, k, a) {
                m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");`
        }} />
    </>;
}
