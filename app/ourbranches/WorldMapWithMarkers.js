"use client"; // Add this at the top

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { IoLocationSharp } from "react-icons/io5";
import styles from "./WorldMapWithMarkers.module.css";


const WorldMapWithMarkers = () => {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoOrthographic(),
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      rotationX: 78.5,
      rotationY: -20,
      zoomLevel: 2.7
    }));

    setTimeout(() => {
      chart.animate({
        key: "rotationX",
        from: chart.get("rotationX"),
        to: chart.get("rotationX") + 360,
        duration: 15000,
        loops: Infinity,
        easing: am5.ease.linear
      });
    }, 500);

    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: worldLow
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0x05a7cc),
      strokeWidth: 1,
      cursorOverStyle: "pointer"
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xef5226),
      strokeWidth: 2,
      stroke: am5.color(0xb33e1d),
      shadowColor: am5.color(0xEF52264D),
      shadowBlur: 10,
      shadowOffsetX: 3,
      shadowOffsetY: 3
    });

    polygonSeries.data.setAll([
      {
        id: "IN",
        fill: am5.color(0xfde5de),
        stroke: am5.color(0x0000ff),
        strokeWidth: 2
      }
    ]);

    let graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
    graticuleSeries.mapLines.template.setAll({
      strokeOpacity: 0.1,
      stroke: root.interfaceColors.get("alternativeBackground")
    });

    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(() => {
      let icon = am5.Graphics.new(root, {
        svgPath: IoLocationSharp({}).props.children[0].props.d,
        scale: 0.04,
        tooltipText: "{title}\n{address}",
        fill: am5.color(0xfde5de)
      });
      return am5.Bullet.new(root, { sprite: icon });
    });

    pointSeries.data.setAll([
      { title: "Delhi", address: "New Delhi, India", geometry: { type: "Point", coordinates: [77.1025, 28.7041] } },
      { title: "Coimbatore", address: "MayFlower Signature, Office No. 7C, 531-537, Avinashi Road, Peelamedu, Coimbatore, Tamilnadu - 641004", geometry: { type: "Point", coordinates: [76.9558, 11.0168] } },
      { title: "Ahmedabad", address: "Ahmedabad, Gujarat, India", geometry: { type: "Point", coordinates: [72.5714, 23.0225] } },
      { title: "Chennai", address: "North Gate, NP 11, Developed PLot, Thiru Vi-Ka Industrial Estate, Ekkathuthangal, Chennai, TamilNadu - 600035", geometry: { type: "Point", coordinates: [80.2785, 13.0878] } },
      { title: "Hyderabad", address: "Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad, Telangana, India-500081", geometry: { type: "Point", coordinates: [78.4867, 17.3850] } },
      { title: "Surat", address: "Surat, Gujarat, India", geometry: { type: "Point", coordinates: [72.8311, 21.1702] } },
      { title: "Indore", address: "Unit No 903-B, NRK Business Park, Vijay Nagar, Indore, Madhya Pradesh - 452010", geometry: { type: "Point", coordinates: [75.8577, 22.7196] } },
      { title: "USA", address: "1101, E Bell Street, Suite-E, Bloomington, Indiana, USA - 61701.", geometry: { type: "Point", coordinates: [-86.5264, 39.1653] } }
    ]);

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Container fluid className={styles.containerFluid}>
      <Row className={styles.rowCentered}>
        <Col md={10} className={styles.colResponsive}>
          <div id="chartdiv" className={styles.chartContainer} />
        </Col>
      </Row>
    </Container>
  );
};

export default WorldMapWithMarkers;
