var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SMANegeri13Jakarta_1 = new ol.format.GeoJSON();
var features_SMANegeri13Jakarta_1 = format_SMANegeri13Jakarta_1.readFeatures(json_SMANegeri13Jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMANegeri13Jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMANegeri13Jakarta_1.addFeatures(features_SMANegeri13Jakarta_1);
var lyr_SMANegeri13Jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMANegeri13Jakarta_1, 
                style: style_SMANegeri13Jakarta_1,
                popuplayertitle: "SMA Negeri 13 Jakarta",
                interactive: true,
                title: '<img src="styles/legend/SMANegeri13Jakarta_1.png" /> SMA Negeri 13 Jakarta'
            });
var format_SMPNegeri30Jakarta_2 = new ol.format.GeoJSON();
var features_SMPNegeri30Jakarta_2 = format_SMPNegeri30Jakarta_2.readFeatures(json_SMPNegeri30Jakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMPNegeri30Jakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMPNegeri30Jakarta_2.addFeatures(features_SMPNegeri30Jakarta_2);
var lyr_SMPNegeri30Jakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMPNegeri30Jakarta_2, 
                style: style_SMPNegeri30Jakarta_2,
                popuplayertitle: "SMP Negeri 30 Jakarta",
                interactive: true,
                title: '<img src="styles/legend/SMPNegeri30Jakarta_2.png" /> SMP Negeri 30 Jakarta'
            });
var format_PolresMetroJakartaUtara_3 = new ol.format.GeoJSON();
var features_PolresMetroJakartaUtara_3 = format_PolresMetroJakartaUtara_3.readFeatures(json_PolresMetroJakartaUtara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolresMetroJakartaUtara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolresMetroJakartaUtara_3.addFeatures(features_PolresMetroJakartaUtara_3);
var lyr_PolresMetroJakartaUtara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolresMetroJakartaUtara_3, 
                style: style_PolresMetroJakartaUtara_3,
                popuplayertitle: "Polres Metro Jakarta Utara",
                interactive: true,
                title: '<img src="styles/legend/PolresMetroJakartaUtara_3.png" /> Polres Metro Jakarta Utara'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SMANegeri13Jakarta_1.setVisible(true);lyr_SMPNegeri30Jakarta_2.setVisible(true);lyr_PolresMetroJakartaUtara_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SMANegeri13Jakarta_1,lyr_SMPNegeri30Jakarta_2,lyr_PolresMetroJakartaUtara_3];
lyr_SMANegeri13Jakarta_1.set('fieldAliases', {'id': 'id', 'gedung': 'gedung', 'foto': 'foto', });
lyr_SMPNegeri30Jakarta_2.set('fieldAliases', {'id': 'id', 'gedung': 'gedung', 'foto': 'foto', });
lyr_PolresMetroJakartaUtara_3.set('fieldAliases', {'id': 'id', 'gedung': 'gedung', 'foto': 'foto', });
lyr_SMANegeri13Jakarta_1.set('fieldImages', {'id': 'TextEdit', 'gedung': 'TextEdit', 'foto': 'TextEdit', });
lyr_SMPNegeri30Jakarta_2.set('fieldImages', {'id': 'TextEdit', 'gedung': 'TextEdit', 'foto': 'TextEdit', });
lyr_PolresMetroJakartaUtara_3.set('fieldImages', {'id': 'TextEdit', 'gedung': 'TextEdit', 'foto': 'TextEdit', });
lyr_SMANegeri13Jakarta_1.set('fieldLabels', {'id': 'no label', 'gedung': 'no label', 'foto': 'no label', });
lyr_SMPNegeri30Jakarta_2.set('fieldLabels', {'id': 'no label', 'gedung': 'no label', 'foto': 'no label', });
lyr_PolresMetroJakartaUtara_3.set('fieldLabels', {'id': 'no label', 'gedung': 'no label', 'foto': 'no label', });
lyr_PolresMetroJakartaUtara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});