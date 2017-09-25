window.addEventListener('load',function(){
	let b1 = $('.b1')[0];
	let b2 = $('.b2')[0];
	let text = $('textarea')[0];
	let area = document.querySelector('.area');
	let liuyan = document.querySelector('.a1');
	b1.addEventListener('click',function(){
		// let text1 = text.value;
		let divs = document.createElement('div');
	    area.prependChild(divs,liuyan);
	    divs.className='a1';
	    divs.innerHTML = text.value;
        text.value = '';	
	})
	b2.addEventListener('click',function(){
		text.value = '';	
	})

})
