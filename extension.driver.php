<?php
	
	class Extension_Collapse_Sectionfields extends Extension {
	/*-------------------------------------------------------------------------
		Extension definition
	-------------------------------------------------------------------------*/
		
		public static $params = null;
		
		public function about() {
			return array(
				'name'			=> 'Collapse Sectionfields',
				'version'		=> '1.0.1',
				'release-date'	=> '2009-07-11',
				'author'		=> array(
					'name'			=> 'Carsten de Vries',
					'website'		=> 'http://www.vrieswerk.nl',
					'email'			=> 'carsten@vrieswerk.nl'
				),
				'description'	=> 'Add a link to collapse all fields in section edit pages, making field ordering a lot easier.'
			);
		}
		
		public function getSubscribedDelegates() {
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'initaliseAdminPageHead'
				)
			);
		}
		
	/*-------------------------------------------------------------------------
		Delegates:
	-------------------------------------------------------------------------*/
		
		public function initaliseAdminPageHead($context) {
			$page = $context['parent']->Page;
			
			// Include only in section edit pages
			if ($page instanceof contentBlueprintsSections and $page->_context[0] == 'edit') {
				$page->addScriptToHead(URL . '/extensions/collapse_sectionfields/assets/collapse_sectionfields.js', 92380002);
			}
		}
	}
	
?>