import React from 'react'
import { Range as Rgn, getTrackBackground} from 'react-range';
import styled from "@emotion/styled";

const RangeContainer = styled.div`
    padding-top:1rem;
    display:flex;
`

const Name = styled.div`
    padding: 0 2rem 0 0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:17rem;
    p{
        font-size:1.4rem;
        color:#4d6478;
    }
`

const Value = styled.p`
    font-size:1.4rem;
`

const Range = ({
    name='',
    value=0,
    color='blue'
}) => {
    return (
        <RangeContainer>
            <Name>
                <p>{name}</p>
            </Name>
            <Rgn
            values={[Number(value)]}
            step={0.1}
            min={0}
            max={150}
            disabled={true}
            renderTrack={({ props, children }) => (
                <div
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%",
                        backgroundColor:'white',
                    }}
                >
                <div
                    ref={props.ref}
                    style={{
                    height: "0.7rem",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                        values: [Number(value)],
                        colors: [color, "#ccc"],
                        min: 0,
                        max: 150
                    }),
                    alignSelf: "center"
                    }}
                >
                    {children}
                </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                {...props}
                style={{
                    ...props.style,
                    height: "2.5rem",
                    width: "4.2rem",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA"
                }}
                >
                    <Value>{value}</Value>
                </div>
            )}
            />
        </RangeContainer>
    )
}

export default Range
