function showSideMenu() {
				$('#sidemenublackbg').fadeIn(200, function(){$('#sidemenu').toggle('slide', { direction: 'left' }, 200);});
			};

			function hideSideMenu() {
				$('#sidemenublackbg').fadeOut(200, function(){$('#sidemenu').toggle('slide', { direction: 'left' }, 200);});
			};
			
			function loadContent(page) {
				Loading();
				setTimeout(function() {removeContent()},  201 );
				setTimeout(function() { 	var div = document.createElement('div');
				$.ajax({
					url : "/"+page,
					success : function(result){
						div.innerHTML = result;
						setTimeout(function() {Loading();   }, 500);
						
					},
					  error: function(XMLHttpRequest, textStatus, errorThrown) {
					 
					  }
				});
				document.getElementById('content').appendChild(div);
				
				}, 202);
			}

			function removeContent() {
				document.getElementById('content').innerHTML = "";
			}
			
			function Loading() {
				$('#loading').toggle('slide', { direction: 'left' }, 200);
			}
	
			function updateHistory(url) {
					history.pushState('', '', url);
			}

			
			window.addEventListener('popstate', function(event) {
				var queryDict = {}
				location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
				
				
				if (window.location.href == 'http:' + home || window.location.href == 'https:' + home) {
					loadContent('home.php');
				}
				else if (window.location.href.search("collection") > 0) {
					loadContent('collection.php?collection='+queryDict['collection'] + '&title='+queryDict['title']);
				}
				else if (window.location.href.search("page") > 0) {
					loadContent('text.php?page='+queryDict['page']);
				}
				else {
					loadContent('home.php');
				};
			});