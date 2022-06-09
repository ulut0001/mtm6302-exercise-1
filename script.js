const $emotlist = document.getElementById("emotlist")

const emoticons = []

for (let i = 128513; i <= 128567; i++) {
  emoticons.push (`
  <div id="emoticon">
        <p style="text-align: center;">
            <span class="emode_call" style="font-size: 5rem;">&#${i};</span><br>
            <code class="emode">${i}</code>
        </p>
    </div>
  `)
}

$emotlist.innerHTML += emoticons.join("")