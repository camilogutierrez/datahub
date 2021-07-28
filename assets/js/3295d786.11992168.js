(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9277],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3960:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(4137)),s=["components"],i={title:"Using transformers",sidebar_label:"Using transformers",slug:"/metadata-ingestion/transformers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md"},l="Using transformers",d={unversionedId:"metadata-ingestion/transformers",id:"metadata-ingestion/transformers",isDocsHomePage:!1,title:"Using transformers",description:"What\u2019s a transformer?",source:"@site/genDocs/metadata-ingestion/transformers.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/transformers",permalink:"/docs/metadata-ingestion/transformers",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md",version:"current",frontMatter:{title:"Using transformers",sidebar_label:"Using transformers",slug:"/metadata-ingestion/transformers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/transformers.md"},sidebar:"overviewSidebar",previous:{title:"Ingesting files from S3",permalink:"/docs/metadata-ingestion/s3-ingestion"},next:{title:"JaaS Authentication",permalink:"/docs/how/auth/jaas"}},p=[{value:"What\u2019s a transformer?",id:"whats-a-transformer",children:[]},{value:"Provided transformers",id:"provided-transformers",children:[{value:"Adding a set of tags",id:"adding-a-set-of-tags",children:[]},{value:"Setting ownership",id:"setting-ownership",children:[]}]},{value:"Writing a custom transformer from scratch",id:"writing-a-custom-transformer-from-scratch",children:[{value:"Defining a config",id:"defining-a-config",children:[]},{value:"Defining the transformer",id:"defining-the-transformer",children:[]},{value:"Installing the package",id:"installing-the-package",children:[]},{value:"Running the transform",id:"running-the-transform",children:[]}]}],m={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-transformers"},"Using transformers"),(0,o.kt)("h2",{id:"whats-a-transformer"},"What\u2019s a transformer?"),(0,o.kt)("p",null,"Oftentimes we want to modify metadata before it reaches the ingestion sink \u2013 for instance, we might want to add custom tags, ownership, or patch some fields. A transformer allows us to do exactly these things."),(0,o.kt)("p",null,"Moreover, a transformer allows one to have fine-grained control over the metadata that\u2019s ingested without having to modify the ingestion framework's code yourself. Instead, you can write your own module that can take MCEs however you like. To configure the recipe, all that's needed is a module name as well as any arguments."),(0,o.kt)("h2",{id:"provided-transformers"},"Provided transformers"),(0,o.kt)("p",null,"Aside from the option of writing your own transformer (see below), we provide two simple transformers for the use cases of adding dataset tags and ownership information."),(0,o.kt)("h3",{id:"adding-a-set-of-tags"},"Adding a set of tags"),(0,o.kt)("p",null,"Let\u2019s suppose we\u2019d like to add a set of dataset tags. To do so, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"simple_add_dataset_tags")," module that\u2019s included in the ingestion framework."),(0,o.kt)("p",null,"The config, which we\u2019d append to our ingestion recipe YAML, would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "simple_add_dataset_tags"\n    config:\n      tag_urns:\n        - "urn:li:tag:NeedsDocumentation"\n        - "urn:li:tag:Legacy"\n')),(0,o.kt)("p",null,"If you'd like to add more complex logic for assigning tags, you can use the more generic add_dataset_tags transformer, which calls a user-provided function to determine the tags for each dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "add_dataset_tags"\n    config:\n      get_tags_to_add: "<your_module>.<your_function>"\n')),(0,o.kt)("h3",{id:"setting-ownership"},"Setting ownership"),(0,o.kt)("p",null,"Let\u2019s suppose we\u2019d like to append a series of users who we know to own a dataset but aren't detected during normal ingestion. To do so, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"simple_add_dataset_ownership")," module that\u2019s included in the ingestion framework."),(0,o.kt)("p",null,"The config, which we\u2019d append to our ingestion recipe YAML, would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "simple_add_dataset_ownership"\n    config:\n      owner_urns:\n        - "urn:li:corpuser:username1"\n        - "urn:li:corpuser:username2"\n        - "urn:li:corpGroup:groupname"\n')),(0,o.kt)("p",null,"If you'd like to add more complex logic for assigning ownership, you can use the more generic ",(0,o.kt)("inlineCode",{parentName:"p"},"add_dataset_ownership")," transformer, which calls a user-provided function to determine the ownership of each dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "add_dataset_ownership"\n    config:\n      get_owners_to_add: "<your_module>.<your_function>"\n')),(0,o.kt)("h2",{id:"writing-a-custom-transformer-from-scratch"},"Writing a custom transformer from scratch"),(0,o.kt)("p",null,"In the above couple of examples, we use classes that have already been implemented in the ingestion framework. However, it\u2019s common for more advanced cases to pop up where custom code is required, for instance if you'd like to utilize conditional logic or rewrite properties. In such cases, we can add our own modules and define the arguments it takes as a custom transformer."),(0,o.kt)("p",null,"As an example, suppose we want to append a set of ownership fields to our metadata that are dependent upon an external source \u2013 for instance, an API endpoint or file \u2013 rather than a preset list like above. In this case, we can set a JSON file as an argument to our custom config, and our transformer will read this file and append the included ownership classes to all our MCEs (if you'd like, you could also include filtering logic for specific MCEs)."),(0,o.kt)("p",null,"Our JSON file might look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "urn:li:corpuser:athos",\n  "urn:li:corpuser:porthos",\n  "urn:li:corpuser:aramis",\n  "urn:li:corpGroup:the_three_musketeers"\n]\n')),(0,o.kt)("h3",{id:"defining-a-config"},"Defining a config"),(0,o.kt)("p",null,"To get started, we\u2019ll initiate an ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCustomOwnershipConfig")," class that inherits from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/configuration/common.py"},(0,o.kt)("inlineCode",{parentName:"a"},"datahub.configuration.common.ConfigModel")),". The sole parameter will be an ",(0,o.kt)("inlineCode",{parentName:"p"},"owners_json")," which expects a path to a JSON file containing a list of owner URNs. This will go in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_transform_example.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.configuration.common import ConfigModel\n\nclass AddCustomOwnershipConfig(ConfigModel):\n    owners_json: str\n")),(0,o.kt)("h3",{id:"defining-the-transformer"},"Defining the transformer"),(0,o.kt)("p",null,"Next, we\u2019ll define the transformer itself, which must inherit from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api/transform.py"},(0,o.kt)("inlineCode",{parentName:"a"},"datahub.ingestion.api.transform.Transformer")),". First, let's get all our imports in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# append these to the start of custom_transform_example.py\n\nimport json\nfrom typing import Iterable\n\n# for constructing URNs\nimport datahub.emitter.mce_builder as builder\n# for typing the config model\nfrom datahub.configuration.common import ConfigModel\n# for typing context and records\nfrom datahub.ingestion.api.common import PipelineContext, RecordEnvelope\n# base transformer class\nfrom datahub.ingestion.api.transform import Transformer\n# MCE-related classes\nfrom datahub.metadata.schema_classes import (\n    DatasetSnapshotClass,\n    MetadataChangeEventClass,\n    OwnerClass,\n    OwnershipClass,\n    OwnershipTypeClass,\n)\n")),(0,o.kt)("p",null,"Next, let's define the base scaffolding for the class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# append this to the end of custom_transform_example.py\n\nclass AddCustomOwnership(Transformer):\n    """Transformer that adds owners to datasets according to a callback function."""\n\n    # context param to generate run metadata such as a run ID\n    ctx: PipelineContext\n    # as defined in the previous block\n    config: AddCustomOwnershipConfig\n\n    def __init__(self, config: AddCustomOwnershipConfig, ctx: PipelineContext):\n        self.ctx = ctx\n        self.config = config\n\n        self.owners = [\n            OwnerClass(owner=owner, type=OwnershipTypeClass.DATAOWNER)\n            for owner in json.loads(config.owner_file)\n        ]\n')),(0,o.kt)("p",null,"A transformer must have two functions: a ",(0,o.kt)("inlineCode",{parentName:"p"},"create()")," function for initialization and a ",(0,o.kt)("inlineCode",{parentName:"p"},"transform()")," function for executing the transformation."),(0,o.kt)("p",null,"Let's begin by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"create()")," method for parsing our configuration dictionary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# add this as a function of AddCustomOwnership\n\n@classmethod\ndef create(cls, config_dict: dict, ctx: PipelineContext) -> "AddCustomOwnership":\n    config = AddCustomOwnershipConfig.parse_obj(config_dict)\n    return cls(config, ctx)\n')),(0,o.kt)("p",null,"Now we need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"transform()")," method that does the work of adding our custom ownership classes. This method will take an MCE as input and output the transformed MCE. Let's offload the processing of each MCE to another ",(0,o.kt)("inlineCode",{parentName:"p"},"transform_one()")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# add this as a function of AddCustomOwnership\n\ndef transform(\n    self, record_envelopes: Iterable[RecordEnvelope]\n) -> Iterable[RecordEnvelope]:\n\n    # loop over envelopes\n    for envelope in record_envelopes:\n\n        # if envelope is an MCE, add the ownership classes\n        if isinstance(envelope.record, MetadataChangeEventClass):\n            envelope.record = self.transform_one(envelope.record)\n        yield envelope\n")),(0,o.kt)("p",null,"With the main ",(0,o.kt)("inlineCode",{parentName:"p"},"transform()")," method set up, the ",(0,o.kt)("inlineCode",{parentName:"p"},"transform_one()")," method will take a single MCE and add the owners that we loaded from the JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# add this as a function of AddCustomOwnership\n\ndef transform_one(self, mce: MetadataChangeEventClass) -> MetadataChangeEventClass:\n    if not isinstance(mce.proposedSnapshot, DatasetSnapshotClass):\n        return mce\n\n    owners_to_add = self.owners\n\n    if owners_to_add:\n        ownership = builder.get_or_add_aspect(\n            mce,\n            OwnershipClass(\n                owners=[],\n            ),\n        )\n        ownership.owners.extend(owners_to_add)\n\n    return mce\n")),(0,o.kt)("h3",{id:"installing-the-package"},"Installing the package"),(0,o.kt)("p",null,"Now that we've defined the transformer, we need to make it visible to DataHub. The easiest way to do this is to just place it in the same directory as your recipe, in which case the module name is the same as the file \u2013 in this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_transform_example"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Advanced: installing as a package"),"Alternatively, create a `setup.py` in the same directory as our transform script to make it visible globally. After installing this package (e.g. with `python setup.py` or `pip install -e .`), our module will be installed and importable as `custom_transform_example`.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from setuptools import find_packages, setup\n\nsetup(\n    name="custom_transform_example",\n    version="1.0",\n    packages=find_packages(),\n    # if you don\'t already have DataHub installed, add it under install_requires\n    # install_requires=["acryl-datahub"]\n)\n'))),(0,o.kt)("h3",{id:"running-the-transform"},"Running the transform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'transformers:\n  - type: "custom_transform_example.AddCustomOwnership"\n    config:\n      owners_json: "<path_to_owners_json>" # the JSON file mentioned at the start\n')),(0,o.kt)("p",null,"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub ingest -c <path_to_recipe>"),", our MCEs will now have the following owners appended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"owners": [\n    {\n        "owner": "urn:li:corpuser:athos",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpuser:porthos",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpuser:aramis",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    {\n        "owner": "urn:li:corpGroup:the_three_musketeers",\n        "type": "DATAOWNER",\n        "source": null\n    },\n    // ...and any additional owners\n],\n')),(0,o.kt)("p",null,"All the files for this tutorial may be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/transforms/"},"here"),"."))}c.isMDXComponent=!0}}]);