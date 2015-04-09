<?php 
Class Base{
	
	private $cnN;
	private $iHost;
	private $iUser;
	private $iPass;
	private $Dbase;

	private function Db(){
		$this->iHost = "localhost";
		$this->iUser = "root";
		$this->iPass = "";
		$this->Dbase = "tienda";
	}
	public function On(){  
		$this->Connex();  	 
	}
	public function Off(){ 
		$this->cnN = null; 
		die();
	}
	private function Connex(){
		try { 
	        $this->Db();
	        $this->cnN = new PDO('mysql:host='.$this->iHost.';dbname='.$this->Dbase, $this->iUser, $this->iPass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	        $this->cnN ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    } catch (PDOException $e){ 
	        die("Sorry I'm not working well!!");
	    }
	}	 

	public function Query($sql,$key=null,$cat=null){
		try {  
			$q = $this->cnN->query($sql);  
			$this->Qc=$q->rowCount();
			if ($key===1) {
				switch ($cat) {  
		            case 3:return $q;break; 
	          	} 
			}
	    } catch (PDOException $q){ 
	        die("Sorry I'm not working well!!".$q);
	    }			
	}

	public function E($sql,$valor){
		try {
		$q = $this->cnN->prepare($sql); 
		$q->execute($valor);  	
	} catch (PDOException $e){ 
	        die("Sorry I'm not working well!!".$e);
	    }
	}

	public function __destruct(){ 
		$this->cnN = null; 
		die();
	}
}
