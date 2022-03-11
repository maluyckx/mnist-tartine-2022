#include "Handler.hpp"





void Handler::ErrorHandler::handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response){
		        response.setChunkedTransferEncoding(true);
				std::cout << response.getStatus()<< std::endl;
				std::ostream& responseStream = response.send();
				responseStream << -2;
	};

//##################################################IMAGE REQUEST###################################################


void Handler::FetchHandler::handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response){
	//forme le chemin !
	std::string id ="image/";
	int i =1;
	while (request.getURI()[i]){
		id +=request.getURI()[i];
		i++;
	}
	id+=".txt";
	//va lire dans le fichier contenant la reponse
	std::fstream file_response;
	std::string resp;
	file_response.open(id, std::ios::in);
	file_response >> resp;
	file_response.close();
	//renvois une reponse
	std::ostream& responseStream = response.send();
	responseStream << resp;

	//delete ??
	remove(id.c_str());
}



void Handler::ImageHandler::handleRequest(Poco::Net::HTTPServerRequest& request, Poco::Net::HTTPServerResponse& response){
	std::string way ="image/";
	int i =0;

	std::string type="";//type de message envoye
	while (request.getURI()[i] != '_'){
		type += request.getURI()[i];
		i++;
	}
	i++;

	std::string nbRandom = "";//identifiant du message envoye
	while (request.getURI()[i] != '_'){
		nbRandom += request.getURI()[i];
		i++;
	}
	i++;

	way = way+ nbRandom + ".png"; //definis le chemin et numero de l'image.
	//mets l'image dans le fichier png
	std::fstream my_file;
	my_file.open(way, std::ios::out);

	while (request.getURI()[i]){
		my_file << request.getURI()[i];
		i++;
	}
	
	my_file.close();
	//appelle python
	//creation du l'objet python
	PyObject* myModuleString = PyString_FromString("nom du fichier python");
	PyObject* myModule = PyImport_Import(myModuleString);
	//creation des objet fonction et argument
	PyObject* myFunction = PyObject_GetAttrString(myModule,"non de la fonction a mettre");
	PyObject* args = PyTuple_Pack(way);//1,PyFloat_FromDouble(2.0));
	//lancement
	PyObject* myResult  = PyObject_CallObject(myFunction, args);

	remove(way.c_str());
}





Poco::Net::HTTPRequestHandler* Handler::HandlerFactory::createRequestHandler(const Poco::Net::HTTPServerRequest &request){
         // choose response based uri
		//  Poco::Util::AbstractConfiguration::Keys elements;
		std::cout << "request"<< request.getURI() << " size :"<< request.getURI().size() << " method:"<< request.getMethod()  <<" Type:" << request.getContentType()<< std::endl;
		//  std::string mot= request.getURI();
		//  request.splitElements(mot,elements ,false);
		//  if(elements.size()>0) std::cout << "Size:  "  <<elements.size()<< "SPlit:" << elements[0] << std::endl;
		//
		//gestion d'image
		if(request.getMethod() == "GET") {
			return new FetchHandler();
		}
		if(request.getMethod() == "SEND") {
			return new ImageHandler();
			//Handwritting analyse
		}
		else{
			return new ErrorHandler();
		}
}