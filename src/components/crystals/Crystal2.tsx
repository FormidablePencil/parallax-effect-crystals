import React from 'react'
import CrystalBackdrop from './CrystalBackdrop'
import styles from '../../styles/crystalStyles.module.css'
function Crystal2({
  onClickHandler,
  imageProps,
  edgesColor,
  middleColor,
  feColorMatrixBackdropColor,
  feColorMatrixStdDeviation,
  feColorMatrixDx,
  feColorMatrixDy,
  browserNotSupported
}: {
  onClickHandler?: any
  imageProps
  edgesColor
  middleColor
  feColorMatrixBackdropColor
  feColorMatrixStdDeviation
  feColorMatrixDx
  feColorMatrixDy
  browserNotSupported
}) {
  return (
    <React.Fragment>
      <svg viewBox='0 0 349 375'>
        <defs>
          <CrystalBackdrop
            feColorMatrixDx={feColorMatrixDx}
            feColorMatrixDy={feColorMatrixDy}
            feColorMatrixStdDeviation={feColorMatrixStdDeviation}
            feColorMatrixBackdropColor={feColorMatrixBackdropColor}
            nameId='filter-crystal2'
          />
          <mask
            id='mask-crystal2'
            x='97'
            y='76'
            width='176'
            height='204'
            maskUnits='userSpaceOnUse'
          >
            <g fill='#374FE9'>
              <g transform='translate(-13.48 46.06)'>
                <image
                  width='176'
                  height='204'
                  transform='translate(110.48 29.94)'
                  xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAADMCAYAAADTVynkAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4Xu2d23KrOhBEh4vP/3/vtsHnIdWmaXok4diJ7TBVUxKSAF0WnUF2ki4irnHYYW9qfa3BYYe9sh0AH/bWdgB82FvbAfBhb20HwIe9tY21Bu9sXdetjq/XY8Pl06yLD9xGU3DVDpA/xz4OYIbXgczwHiC/v31sCNF1nQW467oNuAfI72sfpcAAFvDyMQywcqplh72PfYwCM6x939/yCnEG8BFavKd9DMARC7yswDUVds5tDntt+wiAASrDm4EMc+DO85wCfdhr2kcAHLGFuO/7DcRqCi9e8BjkeZ5vbQ97PXt7gBlWADsMgwW4FEYA2nmeb/lpmjZQH/Za9tYAK5yAVgEehmEFL6CMWAOsEKMdQGZlPuw17G0BVmgZXgCMtDWMYHjneY5hGGKapuj7PuZ5jmmaNiHGYb9rbwtwxBpigDsMQ4zjuAkreGuNrRZKXC6XG7wMsr7wHfY79pYAl8AFvC1xMMypMFKoMByhBSv1ER//nr0lwBFhw4ZxHFchhKpwBnDEdkeCVXgYhpvyXi6X6Pt+BbSGFof9nL0dwFBeVeDT6bRSY42B8SIHgBlkDSMYSI2JociXy+UGMYA+XvR+3t4SYADplDeDmFUY12FjiIdhsABP03QDWEFmoNGer3vYc+ytANadBwWWQc5e5DSM6Lr1llpErFRUAUYKz4BmkA+In2dvB7DCezqdbi9vDuQSwE6FSy90Ci8fM8iXy2UD8hFWPMfeBmCGF8Bq3KsgaxysKa4bsf2WGqunxsGsxgAV4KIf5/N5BTLO4Xsc9n17K4A59lXFZVf1VSVmV2OQWTk5JGCAOXTgPB40BhkveUdY8Th7C4Chmqq2mmYvc8MwbBQY1y29zHEYMY7jJoxwIQRAxvEwDHE+n28KjTZHWPEYewuAXdzL8CIOdsrML3JOhWH8MhfRvi+sMI/jeIOYYb5cLjc17rruCCseZC8PMEADwA5eBrY1DubrOmOFZJDVNRaG6gJkhpihBtBHWPE9e3mAASCDqWGD8wzgYViHExHb3YgIvyMxTdsPOFwszCCjnwgjHMjwI6zYby8NMEBTiOGsxnqsAJdUGPdi01iY42B+qdN0HMcVyAB7GL5iYVVmgN33/Q3iA+R2e1mAGV6nrpoqzKx2AERjYH6Z4zQif5lDOgzDRoU5JmZw9cWO1ZjVGTEyx9UHxGV7WYAjlvABgDKsJSXmPIcQDLADOWL7MtcaCyMOVpBVcRlqDSsAs4J8qHFuLwkwv7QxoAymg5XLcI4DeBiWL/ZoKKHWGguzKrtYWEGGM8ioG8cx/v37d2vPanyAvLaXBDhirb4ltS2psQLslLgUB0e0x8IaSozjOhZmOBla9BvKyyCzGivIh33ZywHM6gsldbA65eUwA/WIoRlg9yKXqXAtFgbMGkIgHYbtl33QPxcPXy6X+Pfv36oMx+fz+QgrxF4O4Ih864zzCnPtSz1OfUsvdDBA0hILD8PyYseKybGwAg3F1XgY0LIa931/a4vr/nWIXwpgF/uywmblXMfp6XRaqXlrHFzbjajFwgxzFgsznHC3V8xqDLABctd1f16NXxJghTODVdWXAWeQszhYVRh9cMaQ1GJhDiOGwX/AAZBLL3UZ2OO43q1A6PIXQX4ZgDP1ZUC13Kmx1vM1WYHdi9yelzmNhYdh+S0OQAmQSy91DCQ/mPxS5xztWJH/4kveywGsUGZ55y4OxmKrArP6IkU/IuIWE8PmefkVoQziLBZmkIdhGwNzLOzA1hc9tOUxot1fe8l7CYBVfUuONpnyKsCcdwAPwzoWRn+cORXmOFhBBpgaCztw9YHLwghOOb5nsP9SWPFSACuIreqbgc8AKMAA97thxDhu42DkAS/Hwurou26vMaxw3pFQsLkNhxV4kD4V4l8HuKS+rCysNDX1LQE8jkssnAHsIGYANIxwcTC/1LHi4hiKzGCO4/IbHAykqu84jpu9YoUc7T99t+JlAFYQS/kS7BnAABcglyBGv5w5FXYhxDiOK2A1BdAAToHO1Jfr+AMOfgBwzul0in///n30bsWvApypL0NaUldX7gBGvgSwgxh9hDG8SBlaBXkY1t9Y0/jXxcLIM7QKMse+DDaPVcH+1N2KXwcYSlHbYVCYa2EEA44FVYCHYX8cHLHdE2Zw8aOaX+YYZlZdFwtjJ4GhRTmX6e6ECzPcQ/BpuxW/BnBJfUt5bd9SpvCO41hU3xrAET4Ovl7Xf9UHgHA8DJA0FmaQ8eMefXYvbxifflKnZe4clKsavyPIvwowJrSkwA5O3e/lkAMLhTLnHEJkAGcQZ2GEKjHiYA0hADGrrILMsAFAAM1lDKkqcPaSx/PD8fG7hhW/AnBNfTHBCrIDU2HGdXThoLoOYBdG9L3/ck/E9gs+KGMl07h4GJb9YIaY41kGue/7lSKjjQMZ11CIOcU5uI6GH+8aVvwawAxbSWFLsbELK7iMyxkUB/AwbL/cg746Kymwe6HjEAJqp6GDpvpSx9Dqy5uWM6CYjyw+5nr+SfAOEP84wDX1LbnbneAFUHC1jOFVkFWF0de9ALPzj2UHMVK4C224ThUbasxj4vHrNpvmNX5G/fn89ev+76DGvwLwMHz96P/vv/+quwkOXl0odx7uofBqygC3xsERbbHwMAwrcNn7vt8osnuhQ1gBYHncGgtfLuv9477v7e4Eg6u7FJg7qDFCnlcF+UcBhso5OB20TmG1vYPawcuLOo7bT+MyiLnvbDWAXQiBPJRUYUaa7UywCqsaO5BRzzsaSFmdMScK8jt8JP3jADsIkW+NfRVU90BkYGMR1QEs8hGxyqP/MAWYVaoEMUAdhkV5FWAAysrL5ziAMY7sGLC6VPPqeCBeMaz4MYAROgCsEqgu1mW1zWBGvVsElDt4Aeow7HuRi2jbTstAHoa2nQkA6+Jhbs/Kq2UYO6c6N5ka8zXxYL1KWPEjAEPZhmEd+/73339FkBlYnKsTz+3ci53meREdxI+Mg+FQLYYX5ay8DCPy8HmeNyD1fb8JLQCgKirCAYaSwwyt43Php9Pp5T6S/hGAI+I2sS3bZgwkTx5Dq7BmwOI8XShOOXRgkCOiCHBEHWIAijzDDDA1tODdBcDMwPIxxslhhu5OwJ0aj+P20zxAjDVzYOMBQF9+S42fDjB+NAM6F+861WUwnao6WNXv2YXgvIMXeV4shZfz/KOWwwaolwLMKX5UK4j4MY68Axnu1JiVF/Pgyrgt5tkdqxr/JMg/AjAGnL2sMYylcuRZfTOIXRn64dSpFeC+X37VaJ7nWz5T4L5f1FfzGkq4lzoNJVpARj0DrQ8sw4hjhTvL67l936+23H4yrHgqwBz7KpxOfRXUrCwDm/MKr4KsrgAjxTg4hQ3DsFFiHKvy9v0WXrTBMVIGGfMHWJGHK0wtoQS7A1lThZfnEPPNf8fiJ1/yfgTgDNps20zVN4PS1bXAqxAruH2//hcELoSAZQADWA4jFGQud8rrVLgU36JOY2huB8g4FnZt3X1UdRVuvODhfDyMOk+PtKcBfK/6uratcGb147j+Ig8vFPeTgS2FETjWRWGAXRiBcIFVVxUZx8OwfnljiLOwAnByG23rzsU86a4E13M7zuucQo37fvnjK88MK54OcEl9AZdTXAXQuYM1m1guc4vTEgMrxGwMLlLnfe/B5TyXAQAHHwOrzmrMD6lTUXc+u57T9/1KbbkNXw/345Dn0RA/BWBV39LOA0OqUJcU1ZXhnlk7N8F9779OWVJgzreqsIMYioxj9EMhrikxv8zxeKZpWuVLQKq3gM0QY45dPH4+n29z+Wg1firACqVzhtpB16q4PIm4dwu8cKfAGEsGLxsvSAvEXddZmAGyOtoBAoVU+89jA1Rczsqsc6Ll2obBbXkY+J6476Ni44cDjMEPw7BSXlVfrtfyEqw1kBlYtzhQarguuoKDMXGaWRZGcF4B5jxSgOwcAPe9j2dZdXmMaKvgQh117A5AN1eunasbhkWdHxkbPw1gDQOc+mZgKsx7gMa9HdAKb7YoGcB97/8lF2ye1/vCJRUuAczAlQBG3kHnQgrOu9iY22HO+Nq1VO/B6qxtWY0B8T0gPxRgnhAGtWULDefwC51+kgYwcQ8FtO/zDypKrovE8KKMx5gZ12ExdHEUZACoAPf9sifMfcKC7wknGLCu61YqDYgUwuxcTYdh+19QsxTOIQ3i+3vV+CkAK5Ql5W317DxMCtog3wp2NtkYT9eVX+JgAI/z1+vyW8oR/iuXaJeBjLyGFYBQQXYgQo25vus6Cy+Ota27djZ37rzsuhwTYxx71PhhAKNTCu0e9WVIOc9QKqAKK0Or5znXydaJx9g4zcYfsQWZ065bYG0FmfOqyA7kvt8qMY9Lx9oyB13nv2rqruuugxTXcH24XC53qfHDAc6gLalvTZVZPbm9guoALcHLE6kLhDFxvsXQTpXUpS0g8zlwBVTBdoAolHrMarzXedycltpmfeF5bFHjhwCMTgCuveqrENeAZjgZ8FaoeUHd4pYWZq91nYeX8xGxUh1WXE7Zr9frTbFQ5trruX2/3pd9hut8Yh6QarlzbLPN8/J3mZ09FOB71LcGaum8Epw1R5857yaWx7jHum6BE3lXBu/7r7hb1TiDGPV9329A5nymrFl59jCzo/+cL6W1NtyO2/NecQbytwHGoKGEqrSsqG4vWOFWYBW8TGVr6usWKqvDuDjVfM0AmLOu26qxhg81iJ0qZxC7mLjk6CM75onHwG0jlm1GLXdlWRs+hvGWotrDAHbqC2gdmDVFxjX1HAY0U2EuR/8yLy0gp3uNzyvBjLYlkLuuDeK+X2+L1cDFvd2Ya/119XvnDGrKqnq9XuN0Oq2OMRe4Lrf/FsCYNKe+DGkJ3j3qq4DW2mWQZuC6hXyEtV6n63KQI5YHQSHGubhPSX3dPTEnHBtrfXaNe+dKQwEt53nQ+WB7CMCqvoDRfRJXUl0GMlPfGrA19R2G/E+q3rsYe6z12lgsVm8NK9COj1EGcHHMbd3Y+VzOt/RXocqUVeHk/Ol02gCLn0AaUvF17wYYE8FwqjN8GlJk6tsCqWvTdZ2F10GaOcb1E1a6jy5SxPLbH1hMtHOxMFwhx0sRlymwbPfMBfebf3I4mNUBMXZkxvHrr3v2/fJFpoj1/NwNcMT6N40V1lblVRhb2zmV5UXhY23/2/Cy1e6JxXIKpCna67hYjdGGYUaZy5dModRU89fr1z/F4WPAiuNhWP85Ll63iO3DfRfAXddtAFOQVWH1mPMMrgO1duzKFGyFF+PgMf2mufvrYrFhoSMWaLpuHUrAuu5r24yPM9szD/cAzNDO87wKHVh153n9v0QYYra7AI5YIHaxr0vVGVrEt32//c6Cg9WByWUOWOcYx55Fe7YBWu0TytnRBnkNGXhs4zjeVPee8eq9GVBWUOeAslQPSEtr/RCAAS7Ac/CqEiu4HO8yqCVYS0APw/IxsAO3BPMrmoJZsmH4io0BAM5T04c2q4PhGu5a2s69gF2v/qNyqCt+grDSch0DXVqz3QBHfA1YQwYHbUvI4GCuPYUOzCzvBl9azFeyrG9d122gAAARZejGcVyFEzAoYWaZesIVYoQDGbSsuuDAqTCvp7NdAONiDJ6GCDX15byqKLfhlNvo4FCWgevKeDzvYAA262/f9ytoOe/GnUGsxiqcqamDmMs53nXxLfKOB11rN/5dAEcsOw8Mb/ZpGxxxrUKq8S53tnS8F1gM3C3muxj3OYMZY6+FExF1iK/Xrx0B5OF6rDADSlZhhngYlr9OD9VFGauwW0O3ds0AAw5A6KCthQwKsZa3PIEO1GzAWq7jeUdr6fcwrL9ED5jVALFCfr0u4QSgZFj1mAFmYAEzUsAKYLHOpRe4mug0AxwRtxtmoKorjJnilpwfHFfO+dITW5uId7Ku24YUKANMEV8gR5QhRpuIRVn5PMDqoIVzOAAmADFDijZa5mAtrSVbE8AMEUOr8CqwaOMA1OMSvNlgWurQfx3Pu5uDGNb3fRHi63X5+ibMgckqzBBrjOte1gArg8xrX9s2c+vvrAngiLhdtCVkyIDOfBiW7yfocdd1m/NRlsFb8k8yHo/CnEGMeWVj1XXlrMRYH1ZSjW35mLkp7TJomeunW78mgLkTLrbNwOWQIYOYB8CgcV0NSgWUB66D/jSII/J9Y4bYAYFz+n7ZxWAFBrRQWKwjqy/KONZ161xzXXd11/eIBoBxsgOVIUZHFGLnqFdQdUDZYDJwszyOP9lqELMiwjiUAMB9v/whQoYb64Y8jhXilr1dZYbXvGXd2aoA8w1bQ4YW5wdjT+f3eMT7fGjxCMP4FGLkATHPNUxVVwFWeBlaF+M6JeaHyK1Xae0zKwLMF26BNKt3HdS6bDCunR6jr67/f80wZoaY56HvF0XldihnWAGhgltzt35alzHiHGNw61kFuO99iOCUt5YvAdk6GAetXksH6wb+yYbxIizQuWAl7vv1zgQgRh0rsVNWXT+9th5n6zsM/vss2n8cY2wpwNoxhAwKpxuMdqK1XeboT6lc867uL1k23mw+AStSDiUArYMXULt1duutwtay7q7/sCLAuHGmrDUouY6vl3X4XphRxn0/7MsyAACqzr+WoZzh5XK35i7WztbXlXFfXTmb3ZvACS7uLXW81tnWzpfq+37bZTe4bMB/yRQGpLU1wPpq6Md1zAAz4q6T3afFs/HAUoD1iXKDwo8AN6DSBGkHW8q5b1lbvhe3/8tWmmcHVwZ0rY6PFeYaA5lHxOpcZxuAs87oIO7tVNZRd39X7qxWntX/JdN5Rb51HbkdixjXOZi1PLsf94n7XLMU4JanLSvj62hb1GVtXF90UFl7PfewL7tnXrFeGZRary9k9zwY2hdnWr56iUMl0lIntL2r57rsHmpZfUv70sAPW8+he1lz3gpiq0dsw4KsnTtWswrMaekJyS6udVzGbUsdd5aVH1Y3nTue61ZIW0KBe5z7UeuvWvGfPriL8A21Hddn5s539ci7a2pZ7Z6HLaZrmMHEcwpYs3NavBZquv7huGTl/1ryTdPO7LGW87I2Lef+RSuBouXPdu6Plmv/uFxtAzA+osOnMK5ur5U6cNjvGkBpiUtrIKrKcp0rV2i5fautAOZvIeEY377nNpzq+XrsHoQWazkna9Ny7l+2DJwW6Lh91sYBzaZlpfvUzIYQDJ466l2qeWelB6BUrm1a2h22tQzCUlnE8ksCDlAt12MGNGvDZRH5ToWaDSGgvPy7Ty1Qu7xee+9xC6y1+sNyc1A48PaWax1bBuM9VlVgQKypwsrH7joZ3A7SDMgSqO7+h7Vb13UbRdX6TDEzIEtgu/NL0GeW7kIwwA5ed1xz/H6Wg5bvy21cuWtfyh+2tRIwfFyDLisvwbgX1FK7ogJP03T7PSfAijzDuxdk3IPv5eq4PjtH27PV6v+qtYCjgNZgL4Hq6vlDC7aWvrE1K7CLiRlsrp+maXV+DegM4qxc+6nlWf6wrZUgU8vqW89zqv1dawKYVTeD+R5Qa+76xH3TNrrld1i77fmx3hJCcFnJateqWfGTOIYV/8vWgexUuAXo2kPgrqGQZjAfID/GaiDVQgtnex6WmlU/SlYFnqapqMhZvgZmi0f4lzwt03LNH1a2FvhexYoAM3AMruYZ7hLUaPNdkEtgc995DIe9vrmHo/bAVBUYAADamhoz8Jpn57Y1QPc4roe+H/bZ1gSwAjtNU1wuFwtyiwqXyrKdDQcpO/rqyngsh9WtNE/PnMN7rl0FOGKJgwGuwupCi5IrpCUwXVnJ2RTsw/Zbbe6cULRayzm1Nk0AR3xdiBWYYc6gVZV2bQBpVqf1NYDRPpvY2oT8NdOHvGV+9giGu17LPVqtCWBAoQAzmFrHwNZUeZq2MTKDqODugVn9sDaA9oDH5XvOQ51bm9b1agI4Yg0xKy+rsQM2g7cEtYYYDGsruGiHvutY/rq1AMLzd89cKtgt99xruwEGYC6MyJzPyaAt+XdA1kV49AR+gjnQsjpuk53XMs/zvP2XuBH7xaUZ4IiviwPE8/m8gTf7tI4hziDVOlVhrUdftIxdy3Qsh62hZKgykN28ZcDjOJv7R6zBLoAjvp6cFtXVFzwHcQY0JnMPnLVy9b9qLVBqG23n5lLnNTt293LX0jaZ7QL4eq2HEVqHelfO57Q4t0Vfpqn8yR7K0H83YX/NaiDpMebRnZud5+r0nEfYLoBh8/ylwtnLXAazQqhwZmqNCXTOdQpt5myPmsh3tRqQpXYMtZ7LZdl13dyjjNewZLsBZmAAMcPMAPPOBMfHWT5zrs9U2EGNCeByjMFN8qebAxWm88NtMkDVATTaMuDZvfUamWX11X/y4ux6va4gdSqM/1BTU2P8hW+u17K+71O4u+7rd7l0IruuW01oxNcXQ9wk1L4w8kmWwfQdd9fRMr231rG5sszuBhhwMcDn83kDLsPMaqlt8Me0FWIFWqEGqNO0/EVwlAFYN7nOPhlkHTfPh1NKrXfz6ObVHWv5njrNq90FcMRWhZ3qahlA5Tqnvsjjz3dy3ikw0hrEWCj+Gwc8Hi37NMtg07oWb4W61B73df3U/mV2N8ARC8Qa9zLQGdzOM8V1DqgZVM27MCJigXSe5xXMmKxPg1hBcBA9wlugLt0f5++xuwHGDRVa9zLnVHme55Uis+qiHVRXPVNgp8IRC5xwPCQYB+wTIebxtULHZS1QYi1q7Ur90T5rubaB3Q1wxAIxg8uQcno+nzdxroMb9QoqoFNAnepym4gtjHjpi1irMNqi7t0hZmgcSC3QwdEWa6Hlrl2pLjsf/eMxcJ/VHgIwQ9yqwoA5U2HUsfLimMHGhJagnmf/uTtUuAQxjt/NeNFrYGawTdN2y1LPcyC665U862dpXLBvARyxjoOxC8Fxr9uZKLmqMFJ+oVNYXeiAYzYOJQB1BrGe804QKxScrwFWK3f1UOTsXFbskmfjKNlDAMbTyg5wATQUFTBr3qkwqy6867qNCl8ulxTiCP9r3AgjpmlaQcznw94JYiw6Q5HBmJWr+nK5c3cut2+5t/OI+idy3wY4wqsww8mxMIcPJRUGsLwfzFCrAjPEag5gVweQa/aqICuwnHewZiA66PZA7EDVulaQa/YwgAEZx8EcUjCcgBsvdiUVRh2Ul1VYIVYFZrjH0Q8Vao571SCGGiP/CsYLXQMCyqrlGZgMpzs3ewCya2Tgat+zY7WHAByxqLBTUxcLO2CdCgNkBRjHmFj3o59tnv2LXMQCot5PXc/BhP4myLq4GbhYnwxYlJUgbIGT76HX5FTzfF42LmcPAzhi+ZaaKi+HEMMwrJTXqTDDizwUluHiUAIQR8RuFWYAGWZn1+t10/6nQebFbAG4BK46VLalPGvr3D0grq8R27hXx8vHDwOYJ4iV1IURTm0ZYoUXoDLMqsgR5Vg3IjYQo88MK84FqE6NW6y13R5rAZfzJXhaIf1OO3Xuh/aFyxzUCi7sYQBHLLEwqzCHDRxG8AcbAJhf3BhelPd9H+fzOQWqBnBE3K7n1Jhh5murGgNuqK/ej1WZy/aaWzAHLlJ1B0cNSgfn5XIplmXn1o5dnzN4M3sKwFBPpAwuYC29vJ3P5xW807QOHabJf1zcAjAmA/flyQKoyJfUmMtr5oBuNT7P5TNw3XEJXoZLfzqWgNTzXDuFtlSewZvN30MBjlhDrODyx8uswqqyDC3HuYDIqfBegLMJYZABHsB1IKOM861gt1gGLVLNOxhK4DCEmWJqm5oil66Vgavwqut4YU8DmAd+uSxbaxwycJ6fesANWFiNAcv5fI6ItfK2mIOAlThTYX5IFOQaxJzfY7xYrt+cVwAYDoXEQaew4ieoK+djBbpFhffCi3bOHg5wxNeEYmClvWAGWRW467ob4ICDAWaHtUCSgdD3/QZkTt39uRx5hThiG0LU+sltXR59jAi7+FymoChoGbwKKQOv5bV2pXtr/1DHfXdzAXsKwBHbPwiIvWBVXg4p0BYQsworsDUIYLq4eHlTGOAZxE554fO8fATN4QdSBpnvXbIM3Ijt76/tgbcElMKrcKozrAqsttHzXH90LOrOngIwJg0TwhBjEAwzXtrgrLysyBr/RsQKKNcPV8ag6oscgEW5AxfHznFP9IeBzhYhMwaWj2sLjflHijzD4vJYKweuQthSptfMHiDtawlmtacADLter5swQsF14QMDyyGEqi+XuXtzHj4Myxd3xnG8lbnJGoZhBSzSLJRx/eJ+ZH11pv1Hqnl1hgHpNK2/XOMALnkGqpa7drhPdm3tE4+DQc7saQBzJzA4DR94BwIvcjhWUFhlNdX7aprBeb1ebxCz6rJ3XZeCXPKsn60Qu3EgrXkNXgW4RXk1VZDP53N6bglY7ZeC65ztaQBHLBCzCivMHDIouAAnA8PdL4tx3aQoxNfr1f40uF49yDXnvrZCzAvEY0DKi5iNLYPCOce8CrGqLPIOVgd1qY27H8M7Tf47xGo/AjAPDODyLgTgVYD1RzVMAXADdIvuHIDiQXIqPM+zBbnm6GsrvGzcf6TZmBhgLDzKMnAVIF0nBRJ5wAtIIU58nEGdwcupultbtqcCHLFW4ctl+ztyDK9TXjWUZQNCXaszwOiri8sZZKTuIcsg5pSt6/zLXSvAutAOXD6G4jp4MtAUXAXYwcp17lwHc9ZnHDv7EYAVYoCr8LZA4a6v92pxTIoCzIA6kBXieV5voZUUWPvPx7pAGcDaf1fmAHDAtsKroDKg6lBjtKuFGw5kpNlY2Z4OcESsJgsAYxeC4Sj9aFZzC16CleNcXlx+iZvntfo6kAGqg5ePI+LWPqKsws4U3Aj/oYUuMMbFeadwDEvJVTVZVVWNXSixR425P9zXDN6IHwI4Yvlg43JZwginviVoYTwQt6Ba7haYY91pmmIcx5UKO9UFyDhm1WV44fP8tX+r4+n78t9UxHkO4q8kdd0AAAgMSURBVNK4NHXgKsAAyMHsINMYGHmFl9XXHeu9+J76gDHIaj8CMIODgajyOoBr6usWEg5AdZHxAsmLOQzDJlWIGVxV46zfOgak07T9jWkelxsj50sQT5PfNlN4M9XLwFV4FUxXxlBznqEvwcvg8hyw/QjAEWuI0dlhWH4rQ0EoXae0oLqwCBHchDiI0T/e5nPQIs9hjxuDA7g2Ps7Xxorx6PgyeDOFY4gYKoZS4W3ZkcjK1N1Dhb7O8/onEtuPARwRq0msKS9by0Lqoiq4rLoo7/t+Vc4qyyA7NUa/53kJHVwMH1F+kXPGY0WajZPHk4HMYGTwOnAVWE5LMbArY//3718KufaVnecC9qMAR6xf6FqVt7SQ07T9kcnwMqCch8IiP47jJpRgoBVkVlyk0zRtyiIeBzCgdMcKrcKa5RUaBpfrFMx74c3UWO/LZTxmtR8FmCf7cvlS4fN5/eV0bc/nKbTsp9Nps5in08mCqzEwA67QIg843Y4Ep5lHLPD2fftLXDYHCi+PO1MwBZeBZYjd1lcGLoRI60rw1sDna6GPLwFwxBILd93yW8W8oNmCOc8WxykwUlVdPR/lDDI7QAbMrRBH7IuBW+ZBIcb4SzAzuAowq14NXga3BmQJcL6e3gfOY1X7FYB5wkuqq+0zcDPnFzOFFi+QHD6gPcr7vr/B7Bwwd13bx8sR5e9EuLHzHLi54AVWeBVUBy7yDl4HLcOr0O31Erzol8KrEP84wBFrFZ6m5U9BaUd1YbBgCmpWxgrLx059cQx457kcA7NjHFBhp8QRj1FghlRTzTOkPE81cLU8g6wGZ2nrLLumriWP3dmvARyRf7LkVETLaq6ToeqKMjjKFWROM5Bbwoi+3/5bAxzr4rTOjwOYAXVlSFXpFF4FOFPNbCstA9zBi7yutT7Mzn4F4Ii1CuO4BPE8z/Hff/81LdQ0rdX3crnE6XS6lbvdBweyQuxi4FaAW1RYFyyDNwO4BC7mgedI4WVo+bikmgpzVpaBy/DyWHgeSvZrAEfkSoPBaAw7z18/6gEjw6plWo8U1+XyDGRAinYK7jQtYQNi4J8GGCAyAFrG4GrKYLGXFFPrAKpr49ry/bTv8Fb7VYAjlkXCj9IawOo86Q5itOHQYBzHFdSqvAoy4MULHcMMv1yWL+QD5mcAzIvNqXNWNoUW9Tpf07T+wjra1FS4Bq6e/11wYb8OMCxbKExkSXlb2iHPULISuxACSquqzDBDdTkeZpjhLgbmPC8e8rq4Cq2Dl+HQvHOu0/3fErw1xc3aPgpc2MsADLtev34EQpH7fvlL6iVAa2WXy2VTBigvl68Y2cXC7BxCTFP5gw3ORyyfxqnyYpw6B7ywDKyDFyBmMGfAKqh6rCBOU773y8fOcV/0G+P6rr0cwDBVl77vV5MPGAGmA5TbsfJy+MAplNepLxRXlZh9bxycjZvBdeqLB9pBy87gKLhcpxBn4Lq62osb/NHgwrqIeNzVnmRYcAYFkAFQgAfnMteOYeVjBlbVl0HOnAEG0KrCOq6IbQiRgavqmykvQ+tU1/me2LemurgvXMf4KHsLgGEZyAyngqlwQ41LIOsDwkrMYQOHDxnEexSYlRepA9cBzMA4eFVxFVTN3wuu9oXH8wx7K4BhLSA7iGvAa54dZRm4XNYSRvA4VH2R1gBWlcsUtwYulzGwJVB/G1zYWwIMAwD4Ud0KMkNaAlkhVkUuhRHoU6sKl0IIVdwshABAqracd+Cy4iq82SdtfB3ug47l2fbWAMMY5JbQwsGtYGdqzPAC5gxiVuK+3/7ldzVWX4Caxb6cV1C1LINWVZfhLYGLNtwX7v9P2kcADGNoWkMLbqMQK8wOYhdWKLg19YVl4YMDWH9kO4AZtJLiapmGDyVwfwNato8CGHYPyAquU1+Fma+fqfAjAZ6mx/+RPoVZw4dXBRf2kQDDHgWyQssgM7DDMKzup/m9ALPqKrjs+hJVA5ch1XoOGV4ZXNjLfpDxCFMF08UFtK5sGJZP6cZx+aCDw4jLZfnlVKfCj1DgEsQAl8eFvFPbLN6dJq/Crwwu7KMVWE0VmdX3v//+2yguf7zM4YSqsYYRrMScch+cZQrMIYSqL0ML+BzEJbXVNnrvV7aPVmA1p8i8+BxGsPqqAl8ul1UIkcXAGkZE1AEGMKx+qr4Msqqsei1M4AcA10Rf3sH+lAKrleJjjYGHYdh84YdDB42HsxCiBeAshHDhgypwprzTtN1lYGhZ/d/J/jTAEfVP9Thk0JQBVpDdC1wJYBf/up8U7ieHCxlUfVWJ3ylMKNmfBxjG8XHXrT/VY/VVeF08nIUSpRc5B7CqroLMQEKVFWAte8cwoWQHwGKtIKtzCMEguzAiYvvHTRiqUuig4YJzVltVbtzjU+wAODEGjkMLBdqFEqrECjGuz9YS/7bGvaq2nwgu7AC4Yi5Gbo2Hkf8OwAqiwqsvbGiH83HtT7UD4EbLQFagszgYECN0YIABGMDLQghW1kxx+QH4C3YAvNMcyAp0bUuNrwNz6qvOIQQr8aeHCSU7AL7TFGRV5r5f7w3vAZjVV0HVkOKvggs7AP6mMcjYtUDKCs11DDHAY4Cnaf2tM4X2r8S3LXYA/EBjlS2FEAxxRDl8UEX+S/Ftix0AP8EAqANXwwhWYAZUX8gOcL0dAD/RWG2dwxyoDOwBbm4HwD9gCq2+wEXEAe2ddgD8g5YBzLAe4O6zA+BfMg0hDrvPDoAPe2sr/7+nww57cTsAPuyt7X/wPslZxbRavQAAAABJRU5ErkJggg=='
                />
              </g>
            </g>
          </mask>
        </defs>
        <title>Crystal 2</title>
        <g className={styles.cls1}>
          <g id='Shard_2' data-name='Shard 2'>
            <polygon
              filter={browserNotSupported ? '' : 'url(#filter-crystal2)'}
              fill={edgesColor}
              points='270.17 151.28 151.26 78.81 99.49 179.9 127.1 244.17 192.38 277.53 270.17 241.44 270.17 151.28'
            />
            <g onClick={onClickHandler} className={styles.cls5crystal2}>
              <polygon
                fill={middleColor}
                points='270.17 151.28 151.26 78.81 99.49 179.9 127.1 244.17 192.38 277.53 270.17 241.44 270.17 151.28'
              />
              <image
                transform={`rotate(${imageProps.rotate})`}
                x='10'
                y='100'
                height={imageProps.height}
                width={imageProps.width}
                xlinkHref={imageProps.image}
              />
            </g>
          </g>
          <g id='Sheens'>
            <polygon
              className={styles.cls8}
              points='153.04 87.58 161.3 119.22 162.47 118.05 153.04 87.58'
            />
            <polygon
              className={styles.cls8}
              points='167.27 137.57 185.98 188.37 189.61 194.25 167.54 132.26 167.27 137.57'
            />
            <polygon
              className={styles.cls8}
              points='202.8 197.88 259.77 154.82 259.77 156.93 210.42 194.79 202.8 197.88'
            />
            <polygon
              className={styles.cls8}
              points='153.04 191.42 114.88 179.17 121.5 183.6 153.04 191.42'
            />
            <polygon
              className={styles.cls8}
              points='190.84 268.91 189.61 215.18 190.84 220.83 190.84 268.91'
            />
            <polygon
              className={styles.cls8}
              points='267.33 238.6 249.11 227.29 250.73 229.98 267.33 238.6'
            />
            <polygon
              className={styles.cls8}
              points='129.09 240.56 141.71 230.02 140.15 234.17 129.09 240.56'
            />
          </g>
        </g>
      </svg>
    </React.Fragment>
  )
}

export default Crystal2
